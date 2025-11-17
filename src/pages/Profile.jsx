import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Profile(){
  const [profile, setProfile] = useState(null)
  useEffect(()=>{
    fetch(`${API}/api/profile/commander-kid`).then(r=>r.json()).then(setProfile).catch(()=>{})
  },[])
  const p = profile || { username:'commander-kid', avatar_type:'kid', badges:[{name:'First Jump'}], achievements:[{title:'Explorer'}], saved_planets:['Unicornucopia'], collectibles:['Star Sticker'], travel_log:['You visited Sparklehorn Galaxy 2 days ago!'] }

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 shadow mx-auto" />
            <div className="text-center mt-3">
              <div className="font-bold text-lg">{p.username}</div>
              <div className="text-sm text-gray-600">Avatar: {p.avatar_type}</div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <Section title="Badges">
              <div className="flex flex-wrap gap-2">
                {p.badges.map(b=> (
                  <span key={b.name} className="px-3 py-1.5 rounded-full text-sm bg-purple-600 text-white shadow">{b.name}</span>
                ))}
              </div>
            </Section>
            <Section title="Travel Log">
              <ul className="list-disc list-inside text-gray-700">
                {p.travel_log.map(i => <li key={i}>{i}</li>)}
              </ul>
            </Section>
            <Section title="Saved Planets">
              <div className="flex flex-wrap gap-2">
                {p.saved_planets.map(sp => <span key={sp} className="px-3 py-1.5 rounded-full bg-gray-100 border">{sp}</span>)}
              </div>
            </Section>
            <Section title="Collectibles">
              <div className="flex flex-wrap gap-2">
                {p.collectibles.map(c => <span key={c} className="px-3 py-1.5 rounded-full bg-yellow-100 border border-yellow-200">{c}</span>)}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({title, children}){
  return (
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-3">{children}</div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function PlanetPage(){
  const { name } = useParams()
  const [planet, setPlanet] = useState(null)
  const [tab, setTab] = useState('about')

  useEffect(() => {
    fetch(`${API}/api/planets/${encodeURIComponent(name)}`).then(r=>r.json()).then(setPlanet).catch(()=>{})
  }, [name])

  const p = planet || { name, tagline: 'A magical destination', age_recommendation: '6-10', travel_time: '3 min', atmosphere: 'Soft clouds', description: 'A beautiful world.' }

  return (
    <div className="bg-white">
      <div className="h-72 md:h-96 bg-gradient-to-br from-purple-100 via-blue-100 to-white" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{p.name}</h1>
                <p className="text-gray-600">{p.tagline}</p>
              </div>
              <Link to={`/travel?planet=${encodeURIComponent(p.name)}`} className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow">Enter Wormhole</Link>
            </div>

            <div className="mt-6 border-b border-gray-100 flex gap-6 text-sm">
              {['about','creatures','toys','adventures'].map(t => (
                <button key={t} onClick={()=>setTab(t)} className={`pb-3 -mb-px ${tab===t? 'text-purple-700 border-b-2 border-purple-600':'text-gray-600 hover:text-gray-900'}`}>{t.charAt(0).toUpperCase()+t.slice(1)}</button>
              ))}
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                {tab==='about' && (
                  <div>
                    <h3 className="font-semibold text-gray-900">About the Planet</h3>
                    <p className="text-gray-700 mt-2">{p.description}</p>
                  </div>
                )}
                {tab==='creatures' && (
                  <div>
                    <h3 className="font-semibold text-gray-900">Creatures & Characters</h3>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      {(p.featured_creatures||['Spark Foxes','Glimmer Owls']).map(c => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                )}
                {tab==='toys' && (
                  <ToysSection planet={p.name} />
                )}
                {tab==='adventures' && (
                  <div>
                    <h3 className="font-semibold text-gray-900">Adventures</h3>
                    <p className="text-gray-700 mt-2">Guided quests, treasure hunts, and science labs themed to this world.</p>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <InfoCard title="Recommended for Ages" value={p.age_recommendation} />
                <InfoCard title="Travel Time Through Wormhole" value={p.travel_time} />
                <InfoCard title="Atmosphere & Terrain" value={p.atmosphere} />
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100">
                  <div className="font-semibold text-gray-900">Featured Discoveries</div>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Ancient Gate Ruins</li>
                    <li>Hidden Star Gardens</li>
                    <li>Crystal Caverns</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

function InfoCard({title, value}){
  return (
    <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
      <div className="text-sm text-gray-600">{title}</div>
      <div className="font-semibold text-gray-900">{value}</div>
    </div>
  )
}

function ToysSection({ planet }){
  const [toys, setToys] = useState([])
  useEffect(()=>{
    fetch(`${API}/api/toys?planet=${encodeURIComponent(planet)}`).then(r=>r.json()).then(setToys).catch(()=>{})
  },[planet])
  const items = toys.length?toys:[{name:'Sample Toy', planet, theme:'Fun', age_range:'5-8', price:9.99}]
  return (
    <div>
      <h3 className="font-semibold text-gray-900">Toys Found Here</h3>
      <div className="mt-3 grid sm:grid-cols-2 gap-4">
        {items.map(t => (
          <div key={t.name} className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-600">Theme: {t.theme} • Ages {t.age_range}</div>
              </div>
              <button className="px-3 py-1.5 rounded-full bg-purple-600 text-white text-sm">Add to Cart</button>
            </div>
            <div className="text-sm text-gray-700 mt-2">Find similar toys from this planet</div>
          </div>
        ))}
      </div>
    </div>
  )
}

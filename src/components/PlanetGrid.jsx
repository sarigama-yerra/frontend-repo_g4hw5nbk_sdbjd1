import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, GaugeCircle, Telescope, ShipWheel } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function PlanetGrid(){
  const [planets, setPlanets] = useState([])
  useEffect(() => {
    fetch(`${API}/api/planets`).then(r=>r.json()).then(setPlanets).catch(()=>{})
  }, [])

  const cards = planets.length ? planets : [
    { name: 'Glubublub', tagline: 'Coral cities beneath sapphire seas', distance_ly: 12.5, difficulty: 'Easy', featured_creatures: ['Bubblebacks'], toy_categories: ['Water Blasters'] },
    { name: 'Unicornucopia', tagline: 'Rainbow forests and shimmering skies', distance_ly: 8.2, difficulty: 'Easy', featured_creatures: ['Star Unicorns'], toy_categories: ['Plushies'] },
    { name: 'Lavar Major', tagline: 'Rivers of lava and magma dragons', distance_ly: 21.0, difficulty: 'Hard', featured_creatures: ['Magma Dragons'], toy_categories: ['Volcano Labs'] },
    { name: 'Whispris', tagline: 'Floating pastel cloud isles', distance_ly: 15.7, difficulty: 'Medium', featured_creatures: ['Cloud Sprites'], toy_categories: ['Gliders'] },
  ]

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore the Universe</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((p, idx) => (
            <motion.a
              key={p.name}
              href={`/planet/${encodeURIComponent(p.name)}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="h-36 bg-gradient-to-br from-purple-100 via-blue-100 to-white"/>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-purple-50 text-purple-700 border border-purple-100">{p.difficulty}</span>
                </div>
                <p className="mt-1 text-gray-600 text-sm">{p.tagline}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2"><Telescope size={14}/> {p.distance_ly} ly</div>
                  <div className="flex items-center gap-2"><GaugeCircle size={14}/> {p.featured_creatures?.[0] || '—'}</div>
                  <div className="flex items-center gap-2"><ShipWheel size={14}/> {p.toy_categories?.[0] || '—'}</div>
                  <div className="flex items-center gap-2"><Sparkles size={14}/> Featured</div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-purple-500/20 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

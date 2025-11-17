import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Shop(){
  const [toys, setToys] = useState([])
  useEffect(()=>{
    fetch(`${API}/api/toys`).then(r=>r.json()).then(setToys).catch(()=>{})
  },[])
  const items = toys.length?toys:[{name:'Sample Toy', planet:'Unicornucopia', theme:'Magic', age_range:'5-8', price:12.99}]
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Shop Toys</h1>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(t => (
            <div key={t.name} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="h-32 rounded-xl bg-gradient-to-br from-purple-100 via-blue-100 to-white" />
              <div className="mt-3 font-semibold text-gray-900">{t.name}</div>
              <div className="text-sm text-gray-600">From {t.planet} • Theme {t.theme} • Ages {t.age_range}</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="font-semibold text-gray-900">${t.price}</div>
                <button className="px-3 py-1.5 rounded-full bg-purple-600 text-white text-sm">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Travel(){
  const [params] = useSearchParams()
  const planet = params.get('planet') || 'Unknown World'
  const [count, setCount] = useState(3)
  const [phase, setPhase] = useState('init')

  useEffect(()=>{
    fetch(`${API}/api/wormhole/initiate`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ planet })})
      .then(()=>{})
      .catch(()=>{})
  },[planet])

  useEffect(()=>{
    if(phase==='init'){
      const interval = setInterval(()=>{
        setCount((c)=>{
          if(c<=1){
            clearInterval(interval)
            setPhase('tunnel')
            return 0
          }
          return c-1
        })
      }, 1000)
      return ()=>clearInterval(interval)
    }
    if(phase==='tunnel'){
      const t = setTimeout(()=>setPhase('arrive'), 2500)
      return ()=>clearTimeout(t)
    }
  },[phase])

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="text-center p-8">
        <AnimatePresence mode="wait">
          {phase==='init' && (
            <motion.div key="init" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0}} className="space-y-3">
              <div className="text-2xl font-semibold text-gray-900">Wormhole stabilizing… {count}…</div>
              <div className="mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 animate-pulse" />
            </motion.div>
          )}
          {phase==='tunnel' && (
            <motion.div key="tunnel" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="space-y-3">
              <div className="text-2xl font-semibold text-gray-900">Engaging tunnel…</div>
              <div className="mx-auto w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-purple-400 animate-spin" style={{filter:'blur(1px)'}} />
            </motion.div>
          )}
          {phase==='arrive' && (
            <motion.div key="arrive" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="space-y-3">
              <div className="text-3xl font-extrabold text-gray-900">Now entering: {planet}</div>
              <div className="text-gray-600">Have an amazing adventure!</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

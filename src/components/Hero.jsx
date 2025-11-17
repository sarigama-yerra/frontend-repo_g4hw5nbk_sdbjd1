import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Choose Your Next World
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-700"
        >
          Travel through cosmic wormholes and discover new planets filled with toys, creatures, and adventures.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 w-full max-w-xl"
        >
          <div className="bg-white/80 backdrop-blur rounded-full shadow-lg p-2 flex items-center gap-3">
            <input placeholder="Where do you want to explore next?" className="flex-1 bg-transparent outline-none px-4 py-3 text-gray-800" />
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow">Search</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

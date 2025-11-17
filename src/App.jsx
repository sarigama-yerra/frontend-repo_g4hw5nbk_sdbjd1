import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PlanetGrid from './components/PlanetGrid'
import Footer from './components/Footer'
import PlanetPage from './pages/PlanetPage'
import Travel from './pages/Travel'
import Profile from './pages/Profile'
import Shop from './pages/Shop'
import About from './pages/About'

function Home(){
  return (
    <div>
      <Hero />
      <PlanetGrid />
    </div>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="planet/:name" element={<PlanetPage />} />
        <Route path="travel" element={<Travel />} />
        <Route path="profile" element={<Profile />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

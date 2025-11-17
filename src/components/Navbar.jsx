import { Link, NavLink } from 'react-router-dom'
import { Rocket, Planet, User, ShoppingBag, Sparkles } from 'lucide-react'

export default function Navbar(){
  const link = 'text-gray-600 hover:text-purple-600 transition-colors font-medium'
  const active = ({isActive}) => isActive ? 'text-purple-700 font-semibold' : link
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 grid place-items-center text-white shadow-lg">
            <Sparkles size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight">Portls</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={active}>Explore Planets</NavLink>
          <NavLink to="/travel" className={active}>Wormhole Travel</NavLink>
          <NavLink to="/profile" className={active}>Your Journey</NavLink>
          <NavLink to="/shop" className={active}>Shop Toys</NavLink>
          <NavLink to="/about" className={active}>About Portls</NavLink>
        </nav>
        <Link to="/profile" className="flex items-center gap-2 text-gray-700">
          <User size={20} />
          <span className="hidden sm:inline">Profile</span>
        </Link>
      </div>
    </header>
  )
}

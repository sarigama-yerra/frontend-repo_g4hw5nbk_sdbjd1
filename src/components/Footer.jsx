export default function Footer(){
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-4 gap-8 text-sm text-gray-600">
        <div>
          <div className="text-lg font-semibold text-gray-900">Portls</div>
          <p className="mt-2">An immersive toy travel universe. Explore safely with guidance for parents.</p>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Parents</div>
          <ul className="mt-2 space-y-2">
            <li><a className="hover:text-purple-700" href="#">Parental Info</a></li>
            <li><a className="hover:text-purple-700" href="#">Safety & Privacy</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Brand</div>
          <ul className="mt-2 space-y-2">
            <li><a className="hover:text-purple-700" href="#">Our Story</a></li>
            <li><a className="hover:text-purple-700" href="#">About Portls</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Help</div>
          <ul className="mt-2 space-y-2">
            <li><a className="hover:text-purple-700" href="#">Support</a></li>
            <li><a className="hover:text-purple-700" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4">© {new Date().getFullYear()} Portls</div>
    </footer>
  )
}

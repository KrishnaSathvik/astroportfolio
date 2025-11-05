import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="header-animate w-full flex justify-between items-center p-4 sm:p-6">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center shadow-lg">
            <img 
              src="/images/logo.svg" 
              alt="AstroByKrishna Logo" 
              className="w-6 h-6 object-contain"
              onError={(e) => {
                // Fallback to PNG if SVG doesn't load
                const target = e.target as HTMLImageElement
                target.src = '/images/logo.png'
              }}
            />
          </div>
          <span className="font-semibold text-zinc-900 tracking-tight font-geist">
            AstroByKrishna
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className={`font-geist transition-colors duration-200 ${
            isActive('/')
              ? 'text-zinc-900 font-medium'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`font-geist transition-colors duration-200 ${
            isActive('/about')
              ? 'text-zinc-900 font-medium'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`font-geist transition-colors duration-200 ${
            isActive('/contact')
              ? 'text-zinc-900 font-medium'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          Contact
        </Link>
      </div>
    </header>
  )
}

export default Navbar


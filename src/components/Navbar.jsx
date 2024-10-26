import { useState } from "react"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from "../assets/mavelas-logo-removebg-preview.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-primary shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <HashLink smooth to="/#home">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </HashLink>
        </div>

        {/* Links for desktop */}
        <div className="space-x-8 hidden md:flex">
          <HashLink smooth to="/#home" className="text-gray-800 hover:text-secondary">Home</HashLink>
          <Link to="/tienda" className="text-gray-800 hover:text-secondary">Tienda</Link>
          <HashLink smooth to="/#quienes-somos" className="text-gray-800 hover:text-secondary">Quiénes Somos</HashLink>
          <HashLink smooth to="/#contacto" className="text-gray-800 hover:text-secondary">Contacto</HashLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pb-4 space-y-4">
            <HashLink smooth to="/#home" onClick={closeMenu} className="block text-gray-800 hover:text-secondary">Home</HashLink>
            <Link to="/tienda" onClick={closeMenu} className="block text-gray-800 hover:text-secondary">Tienda</Link>
            <HashLink smooth to="/#quienes-somos" onClick={closeMenu} className="block text-gray-800 hover:text-secondary">Quiénes Somos</HashLink>
            <HashLink smooth to="/contacto" onClick={closeMenu} className="block text-gray-800 hover:text-secondary">Contacto</HashLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

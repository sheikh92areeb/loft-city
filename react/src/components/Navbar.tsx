import { assets, navLinks } from '../assets/assets'
import { MdMenu } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="shadow-lg sticky top-0 z-10 bg-white">
      {/* Top Bar */}
      <div className="top bg-black text-white flex items-center justify-between px-8 md:px-16 lg:px-24 py-2">
        {/* Logo */}
        <div className="left-text flex items-end gap-2 md:gap-6">
          <div className="logo flex items-center gap-1">
            <img src={assets.logo} alt="Loft City Logo" className="h-8" />
            <h1 className="text-xl md:text-3xl font-medium">LOFT City</h1>
          </div>
          <div className="tagline hidden md:block md:text-lg">
            Holiday Apartments in Karachi
          </div>
        </div>

        {/* Contact Info */}
        <div className="right-text hidden sm:flex items-end gap-2">
          <a href="mailto:info@loftcity.com" className="hidden sm:block text-sm">
            info@loftcity.com
          </a>
          <a href="tel:+1345789444" className="hidden md:block text-sm">
            +1 (345) 789 444
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open Menu"
          onClick={() => setShowMenu(true)}
          className="sm:hidden text-2xl cursor-pointer"
        >
          <MdMenu />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden bg-gray-100 text-gray-900 sm:flex sm:items-center sm:justify-center py-2">
        <ul className="flex border-r px-4 last:border-r-0">
          <NavLinks links={navLinks} liClass="border-r px-4 last:border-r-0" />
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu bg-black text-white fixed top-0 right-0 w-[250px] h-screen z-20 transform transition-transform duration-300 ease-in-out ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="w-full h-10 text-2xl flex items-center justify-end pe-5 mb-8">
          <button
            aria-label="Close Menu"
            onClick={() => setShowMenu(false)}
            className="cursor-pointer"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="px-8">
          <NavLinks
            links={navLinks}
            liClass="mb-8"
            onClick={() => setShowMenu(false)}
          />
        </ul>
      </div>
    </header>
  )
}

export default Navbar

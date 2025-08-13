import { NavLink } from 'react-router'
import React from 'react'
import type { NavLinksProps } from '../assets/interfaces'

const NavLinks: React.FC<NavLinksProps> = ({ links, liClass, onClick }) => {
  return (
    <>
      {links.map((link) => (
        <li key={link.linkname} className={`text-lg ${liClass || ''}`}>
          <NavLink
            to={link.path}
            onClick={onClick}
            className={({ isActive }) =>
              `${isActive ? 'underline' : ''} underline-offset-4 hover:underline`
            }
          >
            {link.linkname}
          </NavLink>
        </li>
      ))}
    </>
  )
}

export default NavLinks

import { NavLink } from 'react-router'
import React from 'react'

interface NavLinkItem {
  path: string
  linkname: string
}

interface NavLinksProps {
  links: Readonly<NavLinkItem[]>
  liClass?: string
  onClick?: () => void // for closing mobile menu on click
}

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

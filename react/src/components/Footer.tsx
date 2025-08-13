import { NavLink } from "react-router"
import { contactLinks, icons, quickLinks } from "../assets/assets"

const Footer = () => {
  return (
    <footer>

        {/* Contact Section */}
        <div className="contact-section bg-black text-white px-8 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">

            {/* Contact Info */}
            <div className="mb-4">
                <h3 className="text-2xl font-medium mb-6">Contact</h3>
                <div className="links flex flex-col gap-2">
                    <p>500 Terry Francine Street<br />Landhi, KHI 12345</p>                    
                    <a href={`mailto:${contactLinks[0]}`} className="hover:underline hover:text-gray-300">
                        {contactLinks[0]}
                    </a>
                    <a href={`tel:${contactLinks[2]}`} className="hover:underline hover:text-gray-300">
                        {contactLinks[2]}
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div className="mb-4">
                <h3 className="text-2xl font-medium mb-6">Quick Links</h3>
                <div className="links flex flex-col gap-2 ps-3">
                    {quickLinks.map((link)=> (
                        <NavLink key={link.linkname} to={link.path} className='underline-offset-4 hover:underline hover:text-gray-300'>{link.linkname}</NavLink>
                    ))}                    
                </div>
            </div>


            {/* Payment Icons */}
            <div className="mb-4">
                <h3 className="text-2xl font-medium mb-6">We Accept</h3>
                <div className="payment-cards flex max-sm:flex-col sm:items-center gap-2">
                    {icons.map((icon, index) => (
                        <img key={icon} src={icon} alt={`Payment method ${index + 1}`} className="w-10 cursor-pointer" loading="lazy"/>
                    ))}
                </div>
            </div>
        </div>

        {/* Copyright */}
        <div className="copyright bg-gray-100 text-gray-900 flex items-center justify-center py-2">
            <p className="text-center text-xs sm:text-sm">Copyright © 2023 By <a href="#" className="hover:underline"> Loft City</a>. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer

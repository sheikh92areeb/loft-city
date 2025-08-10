import { assets } from "../assets/assets"


const Navbar = () => {
  return (
    <header>
        <div className="top bg-black text-white flex items-center justify-between md:px-30">
            <div className="left-text flex">
                <div className="logo flex">
                    <img src={assets.logo} alt="Logo" />
                    <h1>LOFT City</h1>
                </div>
                <div className="tagline">Holiday Apartments in Karachi</div>
            </div>
            <div className="right-text">right</div>
        </div>
        <nav className="md:px-30">
            <ul>
                <li>Home</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar

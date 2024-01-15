import { NavLink } from "react-router-dom"
import { princeLogo } from "../assets/icons";

function Navbar() {
  return (
    <header className="header">
        <NavLink to="/">
        <img
        src={princeLogo}
        alt="Home_Logo"
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
        />
        </NavLink>
        <nav className="flex text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl gap-3 font-medium">
            <NavLink to="/trailer" className={({ isActive}) => isActive ?
            'text-yellow-500' : 'text-white' }>
                Trailer
            </NavLink>
            <NavLink to="/sountrack" className={({ isActive}) => isActive ?
            'text-yellow-500' : 'text-white' }>
                Soundtrack
            </NavLink>
            <NavLink to="/contact" className={({ isActive}) => isActive ?
            'text-yellow-500' : 'text-white' }>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
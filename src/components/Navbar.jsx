import { NavLink } from "react-router-dom"
import { princeLogo } from "../assets/icons";

function Navbar() {
  return (
    <header className="header">
        <NavLink to="/">
        <img
        src={princeLogo}
        alt="Home_Logo"
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
        />
        </NavLink>
        <nav className="flex text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl gap-3 font-medium">
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
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="header">
        <NavLink to="/" className="w-40 h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
            <img src="/src/assets/icons/prince_logo.png" alt="Favicon" className="w-12 h-12" />
        </NavLink>
        <nav className="flex text-lg gap-5 font-medium">
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
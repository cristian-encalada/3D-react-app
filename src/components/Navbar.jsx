import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="header">
        <NavLink to="/" className="w-40 h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
            <img src="/src/assets/favicon.png" alt="Favicon" className="w-12 h-12" />
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive}) => isActive ?
            'text-blue-500' : 'text-white' }>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive}) => isActive ?
            'text-blue-500' : 'text-white' }>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
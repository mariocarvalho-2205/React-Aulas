import { NavLink } from "react-router-dom" 
import "./Nav.css"

const Nav = () => {
  return (
    <nav className="navLink">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Nav
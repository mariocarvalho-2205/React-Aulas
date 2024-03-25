import { Link, NavLink } from "react-router-dom";
import "./Nav.modules.css";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Nav;

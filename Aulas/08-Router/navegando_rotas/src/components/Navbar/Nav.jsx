import { Link } from "react-router-dom";
import "./Nav.modules.css"

const Nav = () => {
	return (
		<nav>
      <Link to="/">Home</Link>
			<Link to="/produtos">Produtos</Link>
			<Link to="/about">About</Link>
		</nav>
	);
};

export default Nav;

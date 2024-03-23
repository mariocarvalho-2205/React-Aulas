import { Link } from "react-router-dom";

const Produtos = () => {
	return (
		<div>
			<h2>Produtos</h2>
			<Link to="/">Home</Link>
      <Link to="/about">About</Link>
		</div>
	);
};
export default Produtos;

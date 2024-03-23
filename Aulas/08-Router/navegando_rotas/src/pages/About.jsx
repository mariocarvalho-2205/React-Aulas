import { Link } from "react-router-dom";

const About = () => {
	return (
		<div>
			<h2>About</h2>
			<Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
		</div>
	);
};

export default About;

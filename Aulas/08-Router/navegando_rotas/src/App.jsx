import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../src/components/Navbar/Nav";
import Home from "../src/pages/Home";
import Produto from "../src/pages/Produto";
import Produtos from "../src/pages/Produtos";
import About from "../src/pages/About";
import Info from "../src/pages/Info";
import "./App.css";

function App() {
	return (
		<>
			<h1>Principal</h1>
      {/*links com as rotas precisa estar dentro do Browser Router*/}
			<BrowserRouter>
				<Nav /> 
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/produtos" element={<Produtos />} />
					{/* Rota Dinamica */}
					<Route path="/produtos/:id" element={<Produto />} />
					{/* Nested Route */}
					<Route path="/produtos/:id/info" element={<Info />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

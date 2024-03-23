import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/indes";
import About from "../src/pages/About/index";
import "./App.css";

function App() {
	return (
		<>
		<h1>Desafio 8</h1>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

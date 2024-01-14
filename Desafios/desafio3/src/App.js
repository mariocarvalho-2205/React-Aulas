import "./App.css";
import { useState } from "react";
import UserDetails from "./component/UserDetails";

function App() {
	const [persons] = useState([
		{
			nome: "Joao",
			idade: 35,
			profissao: "Contador",
		},
		{
			nome: "maria",
			idade: 17,
			profissao: "Professora",
		},
		{
			nome: "Jose",
			idade: 28,
			profissao: "Engenheiro",
		},
	]);

	return (
		<div className="App">
			{persons.map((person, index) => (
				<UserDetails
					key={index}
					nome={person.nome}
					idade={person.idade}
					profissao={person.profissao}
				/>
			))}
		</div>
	);
}

export default App;

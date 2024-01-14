import "./App.css";
import { useState } from "react";
import UserDetails from "./component/UserDetails";

function App() {
	const [persons] = useState([
		{
      id: 1,
			nome: "Joao",
			idade: 35,
			profissao: "Contador",
		},
		{
      id: 2,
			nome: "Maria",
			idade: 17,
			profissao: "Professora",
		},
		{
      id: 3,
			nome: "Jose",
			idade: 28,
			profissao: "Engenheiro",
		},
		{
      id: 4,
			nome: "Antonio",
			idade: 50,
			profissao: "Medico",
		},
		{
      id: 5,
			nome: "Mirian",
			idade: 16,
			profissao: "Estudante",
		},
	]);

	return (
		<div className="App">
			{persons.map((person) => (
				<UserDetails
					key={person.id}
					nome={person.nome}
					idade={person.idade}
					profissao={person.profissao}
				/>
			))}
		</div>
	);
}

export default App;

import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./styles.css";

const url = "http://localhost:3000/cars";

const Form = () => {
	const [cars, setCars] = useState([]);

	const [marca, setMarca] = useState("");
	const [modelo, setModelo] = useState("");

	// 4 custom hook
	const { data: items, httpConfig, loading } = useFetch(url);

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	// 1 usando useEffect para inicio
	// useEffect(() => {
	//     // o useEffect nao aceita async, precisa fazer uma function
	//     // asincrona dentro do useEffect
	//     async function fetchData() {
	//         const res = await fetch(url)

	//         const data = await res.json()

	//         setCars(data)
	//     }

	//     fetchData()

	// }, [])
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

	const handleSubmit = async (e) => {
		e.preventDefault();

		const cars = {
			marca,
			modelo,
		};
		// console.log(cars)

		// // 2 requisição
		// const res = await fetch(url, {
		//     method: "POST",
		//     headers: {
		//         "Content-Type": "application/json"
		//     },
		//     body: JSON.stringify(cars)
		// })

		// // 3 adicionamento dinamico
		// const addedCars = await res.json()

		// setCars((prevCars) => [...prevCars, addedCars])

		httpConfig(cars, "POST");
		setMarca("");
		setModelo("");
	};

	return (
		<div>
			<h2>Cadastro de Novos Carros</h2>
			{loading && <p>Carregando...</p>}
			{!loading && (
				<ul>
					{items &&
						items.map((car) => (
							<li key={car.id}>
								{car.marca} - {car.modelo}
							</li>
						))}
				</ul>
			)}

			{/* // formulario */}
			<form onSubmit={handleSubmit}>
				<label>
					Marca:
					<input
						type="text"
						value={marca}
						name="marca"
						onChange={(e) => setMarca(e.target.value)}
					/>
				</label>
				<label>
					Modelo:
					<input
						type="text"
						value={modelo}
						name="modelo"
						onChange={(e) => setModelo(e.target.value)}
					/>
				</label>
				<input type="submit" value="Adicionar" />
			</form>
		</div>
	);
};

export default Form;

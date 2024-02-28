import { useState, useEffect } from "react";
import { useFetch } from "../hooks/UseFetch";
import "./styles.css";

const url = "http://localhost:3000/cars";

const Form = () => {
	const [cars, setCars] = useState([]);
	const { data: items } = useFetch(url);

	const [marca, setMarca] = useState("");
	const [modelo, setModelo] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const car = {
			marca,
			modelo,
		};

		const res = fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(car),
		});

		const addedCar = res.json();
		setCars((pervCars) => [...pervCars, addedCar]);

		setMarca("");
		setModelo("");
	};

	return (
		<div>
			<h1>Relação de Items</h1>
			<ul>
				{items && items.map((item) => (
					<li key={item.id}>{item.marca} - {item.modelo}</li>	
					))}
			</ul>

			<form onSubmit={handleSubmit}>
				<label>
					Marca:
					<input
						type="text"
						name="marca"
						value={marca}
						onChange={(e) => setMarca(e.target.value)}
					/>
				</label>
				<label>
					Modelo:
					<input
						type="text"
						name="modelo"
						value={modelo}
						onChange={(e) => setModelo(e.target.value)}
					/>
				</label>
				<input type="submit" value="Adicionar" />
			</form>
		</div>
	);
};

export default Form;

import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./styles.css";

const url = "http://localhost:3000/cars";

const Form = () => {

	const [marca, setMarca] = useState("");
	const [modelo, setModelo] = useState("");

	// 4 custom hook
	const { data: items, httpConfig, loading, error } = useFetch(url);


	const handleSubmit = async (e) => {
		e.preventDefault();

		const cars = {
			marca,
			modelo,
		};


		httpConfig(cars, "POST");
		setMarca("");
		setModelo("");
	};

	// função para adicionar o id e o methodo
	const handleRemove = (id) => {
		httpConfig(id, "DELETE");
	};

	return (
		<div>
			<h2>Cadastro de Novos Carros</h2>
			{loading && <p>Carregando dados...</p>}
			{error && <p>{error}</p>}
			{!error && (
				<ul>
					{items &&
						items.map((car) => (
							<li key={car.id}>
								{car.marca} - {car.modelo}
								<button onClick={() => handleRemove(car.id)}>Excluir</button>
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
				{loading && <input type="submit" value="Aguarde" />}
				{!loading && <input type="submit" value="Adicionar" />}
				
			</form>
		</div>
	);
};

export default Form;

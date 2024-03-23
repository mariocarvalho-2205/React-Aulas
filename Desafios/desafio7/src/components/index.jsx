import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/produtos";

const Home = () => {
	const [produto, setProduto] = useState(null);

	const { data: items, httpConfig, loading, error } = useFetch(url);

	const [nome, setNome] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const produtos = {
			nome,
		};

		httpConfig(produtos, "POST");
		setNome("");
	};

	const handleDelete = async (id) => {
		httpConfig(id, "DELETE");
	};

	return (
		<div>
			<h1>Home</h1>
			{error && <p>{error}</p>}

			<form onSubmit={handleSubmit}>
				<label>
					Nome:
					<input
						type="text"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
					/>
				</label>
				{loading && <input type="submit" value="Aguarde" disabled />}
				{!loading && <input type="submit" value="Salvar" />}
			</form>

			{loading && <p>Carregando....</p>}
			{!error && (
				<ul>
					{items &&
						items.map((item) => (
							<li key={item.id}>
								{item.nome} -
								<button onClick={() => handleDelete(item.id)}>
									Excluir
								</button>
							</li>
						))}
				</ul>
			)}
		</div>
	);
};

export default Home;

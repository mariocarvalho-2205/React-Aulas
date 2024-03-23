import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Produto = () => {
	const { id } = useParams();

	const url = "http://localhost:3000/produtos/" + id;

	const { data: item, loading, error } = useFetch(url);

	return (
		<>
			<p>Id do Produto {id}</p>
			{loading && <h3>Carregando...</h3>}
			{!error ? <p>{item && item.nome}</p> : <p>{error}</p>}
		</>
	);
};

export default Produto;

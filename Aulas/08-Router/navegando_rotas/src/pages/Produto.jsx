import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Produto = () => {
	const { id } = useParams();

	const url = "http://localhost:3000/produtos/" + id;

	const { data: item, loading, error } = useFetch(url);

	return (
		<>
			<p>Id do Produto {id}</p>
      {error && <p>{error}</p>}
			{loading && <h3>Carregando...</h3>}
      {item && (
        <div>
          <p>{item.nome}</p>
          <Link to={`/produtos/${item.id}/info`}>Mais Informações</Link>
        </div>
      )}
			{/* {!error ? (
        <div>
          <p>{item && item.nome}</p>
          <Link to={`/produtos/${item.id}/info`}>Detalhes</Link>
        </div>
      ) : (<p>{error}</p>)} */}
		</>
	);
};

export default Produto;

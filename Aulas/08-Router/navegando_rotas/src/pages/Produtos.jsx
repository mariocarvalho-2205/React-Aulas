import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Produtos.modules.css"


const Produtos = () => {
	const url = "http://localhost:3000/produtos";

	const { data: items, loading, error } = useFetch(url);
	return (
		<div>
			<h2>Produtos</h2>
      {loading && <h3>Carregando...</h3>}
      <ul>
      {items && items.map((item) => (
        <li key={item.id}>
          <h4>{item.nome}</h4>
          <Link to={`/produtos/${item.id}`}>Detalhes</Link>
        </li>
      ))}

      </ul>
		</div>
	);
};
export default Produtos;

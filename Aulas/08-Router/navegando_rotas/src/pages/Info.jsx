import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Info = () => {

    const { id } = useParams();

    const url = "http://localhost:3000/produtos/" + id ;
    
    const { data: item, loading, error } = useFetch(url);
  return (
    <>
        <h2>Informações do produto: {id}</h2>
        {error && <p>{error}</p>}
        {loading && <h3>Carregando...</h3>}
        {item && (
            <div>
                <h3>Produto: {item.nome}</h3>
                <p>Caracteristica: {item.informacao}</p>
            </div>
        )}
    </>
  )
}

export default Info
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = (props) => {
  const [searchParams] = useSearchParams();
  const nome = searchParams.get("nome")

  const url = `http://localhost:3000/produtos?${nome}`;

  const { data: item, loading, error } = useFetch(url);
  
  console.log(nome + " search")
  


  return ( 
  <div>
    
    <h2>Resultado da Busca {nome}</h2>

    <ul>
        {item && item.map((item) => (
          <li key={item.id}>
            <p>{item.nome}</p>
            <a href={`/produtos/${item.id}`}>Detalhes</a>
          </li>
        ))}
    </ul>


  </div>
  )
};

export default Search;

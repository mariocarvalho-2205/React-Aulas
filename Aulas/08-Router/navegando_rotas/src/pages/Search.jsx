import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = `http://localhost:3000/produtos?${searchParams}`;

  const { data: items, loading, error } = useFetch(url);

  


  return ( 
  <div>
    
    <h2>Resultado da Busca</h2>
    <ul>
        {items && items.map((item) => (
            
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

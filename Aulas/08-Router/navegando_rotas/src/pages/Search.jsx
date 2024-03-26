import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {

    const { searchParams } = useSearchParams()

    const url = "http://localhost:3000/produtos?q=" + searchParams
    const { data: items, loading, error } = useFetch(url)

  return (
    <div>
        <h2>Resultado da busca:</h2>
        <ul>
      {items && items.map((item) => (
        <li key={item.id}>
          <h3>{item.nome}</h3>
          {/* <Link to={`/produtos/${item.id}`}>Detalhes</Link> */}
        </li>
      ))}

      </ul>
     
      
    </div>
  )
}

export default Search
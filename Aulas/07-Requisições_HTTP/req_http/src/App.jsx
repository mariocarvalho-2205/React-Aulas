import { useState, useEffect } from "react"
import './App.css'

function App() {
  const [ products, setProducts ] = useState([])

  // url base
  const url = "http://localhost:3000/products"

  // Resgatando dados da API
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    }

    // chama a função dentro do useEffect para fazer o fetch
    fetchData()
    
  }, [])

  return (
    <div className='App'>
      <h1>Lista de Produtos</h1>
      <ul>
      {products.map(product => (
          <li key={product.id}>{product.name} - R$ {product.price}</li>
      ))}

      </ul>
    </div>
  )
}

export default App

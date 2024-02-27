import { useState, useEffect } from "react"

// import custom hook
import { useFetch } from "./hooks/useFetch"

import './App.css'
const url = "http://localhost:3000/cars";

function App() {

  const [cars, setCars ] = useState([]);

  // custom hook
  const { data: items } = useFetch(url);

  const [ marca, setMarca ] = useState("");
  const [ modelo, setModelo ] = useState("");
  const [ ano, setAno ] = useState("");
  const [ price, setPrice ] = useState("");

// // regatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     setCars(data);

  //   }

  //   fetchData();
  //   console.log(cars);
  // }, [])
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    // resgatando os dados do formulario
    const car = {
        marca,
        modelo,
        ano,
        price
    }

    // configurando o methodo para POST
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(car)  // transforma os dados em json para einviar para o backend

        
    })
    // carregamento dinamico para alimentar a pagina com os dados do backend
    // instantanemente
    const addedCar =  await res.json(); // pegamos o objeto json novamente para ser atualizado
    setCars((prevCars) => [ ...prevCars, addedCar ])  // aqui adicionameo automaticamente 

    // resetando as strings para um novo form
    setMarca("");
    setModelo("");
    setAno("");
    setPrice("");

}

  return (
    <div className="container">
      <h1>Relação de Carros</h1>
      <ul>
        {items && items.map(car => (
          <li key={car.id}>{car.marca} - {car.modelo} - {car.ano} - R$ {car.price}</li>
        ))}
      </ul>

      <h2>New Car</h2>
			<form className="form" onSubmit={handleSubmit}>
				<label>
					Marca:
					<input type="text" value={marca} name="marca" onChange={(e) => setMarca(e.target.value)}/>
				</label>
				<label>
					Modelo:
					<input type="text" value={modelo} name="modelo" onChange={(e) => setModelo(e.target.value)}/>
				</label>
				<label>
					Ano:
					<input type="number" value={ano} name="ano" onChange={(e) => setAno(e.target.value)}/>
				</label>
				<label>
					Preço:
					<input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
				</label>
                <input type="submit" value="Enviar" />
			</form>
    </div>
  )
}

export default App

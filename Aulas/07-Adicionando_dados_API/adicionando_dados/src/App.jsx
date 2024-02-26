import { useState, useEffect } from "react"

import './App.css'
import FormCar from "./components/FormCar";

function App() {

  const [cars, setCars ] = useState([]);

  const url = "http://localhost:3000/cars";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();

      setCars(data);

    }

    fetchData();
    console.log(cars);
  }, [])
 

  return (
    <div className="container">
      <h1>Relação de Carros</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.marca} - {car.modelo} - {car.ano} - R$ {car.price}</li>
        ))}
      </ul>
      <FormCar />
    </div>
  )
}

export default App

import { useState } from 'react' 
import ListCars from './components/ListCars'
import './App.css'

function App() {

  const [cars] = useState([
    {
      id: 1,
      marca: "Ford",
      modelo: "Fiesta",
      ano: 2017,
    },
    {
      id: 2,
      marca: "Fiat",
      modelo: "Palio",
      ano: 2021,
    },
    {
      id: 3,
      marca: "GM",
      modelo: "Astra",
      ano: 2023,
    },
    {
      id: 4,
      marca: "Hyundai",
      modelo: "HB20",
      ano: 2010,
    },
  ]);

  return (
    <>
      <h1 className='title_app'>Carros a Venda</h1>
      <div className='car_container'>
        {cars.map((car) => (
          <ListCars key={car.id} marca={car.marca} modelo={car.modelo} ano={car.ano}/>

        ))}

      </div>

    </>
  )
}

export default App

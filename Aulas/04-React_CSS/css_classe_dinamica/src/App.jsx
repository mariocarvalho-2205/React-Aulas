import {useState} from 'react'
import List from './List'
import './App.css'

function App() {
  
  const [ cars ] = useState([
    {
      id: 1,
      marca: 'ford',
      modelo: 'fusion'
    },
    {
      id: 1,
      marca: 'ford',
      modelo: 'fusion'
    },
    {
      id: 1,
      marca: 'Fiat',
      modelo: 'fusion'
    },
  ])
  return (
    <>
      <h1>CSS Classe Dinamica</h1>
      {cars.map((car) => (
        <List key={car.id} marca={car.marca} modelo={car.modelo}/>
      ))}
    </>
  )
}

export default App

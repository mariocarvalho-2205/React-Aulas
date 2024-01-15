import { useState } from 'react'
import List from './List'
import './App.css'

function App() {

  const [ pessoas ] = useState([
    {
      id: 1,
      nome: 'Mario',
      idade: 48
    },
    {
      id: 1,
      nome: 'Ady',
      idade: 30
    },
    {
      id: 1,
      nome: 'Joao',
      idade: 50
    },
    {
      id: 1,
      nome: 'Eliane',
      idade: 17
    },
    {
      id: 1,
      nome: 'Antonio',
      idade: 25
    },
  ])
  return (
    <>
      <h1>Css Module</h1>
      {pessoas.map((pessoa) => (
        <List key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} />
      ))}
    </>
  )
}

export default App

import { useState } from 'react'


import './App.css'

function App() {
  const [contador, setContador] = useState(0)
  const [ nome, setNome ] = useState('Mario')

  const mudarNome = () => {
    setNome('Mario Carvalho')
  }

  return (
    <>
      <h1>Contador {contador}</h1>
      <h2>Nome: {nome} + {contador}</h2>
      <input type="submit" value="somar" onClick={() => setContador(contador + 1)} />
      <input type="submit" value="diminuir" onClick={() => setContador(contador - 1)} />
      <input type="submit" value="Mudar nome" onClick={mudarNome} />
    </>
  )
}

export default App

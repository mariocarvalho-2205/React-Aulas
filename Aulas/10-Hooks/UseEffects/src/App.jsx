import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ puro, setPuro ] = useState(0)

  const somePuro = () => {
    setPuro(count + 1)
    console.log('Executou a função puro')
  }
  const changeSomething = () => {
    setCount(count + 1)
    console.log('Executou a função some')
  }
  // sem dependencias ele executa somente 
  // quando o componente e rerenderizado

  useEffect(() => {
    
    console.log('Executou o useEffect puro')
  })

  // e executado apenas uma vez
  useEffect(() => {
    somePuro()
    console.log('Executou o useEffect com array vaziu', puro)
  },[])

  // e executado sempre que o count mudar
  useEffect(() => {
    setCount + 1
    console.log('Executou o useEffect com dependencias', count)
  }, [count])
  return (
    <>
      <h1>UseEffect</h1>
      <p>Number: {count}</p>
      <button onClick={changeSomething}>Executar!</button>
      <hr />

    </>
  )
}

export default App

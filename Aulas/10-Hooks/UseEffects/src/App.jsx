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
  // 1 - sem dependencias ele executa somente 
  // quando o componente e rerenderizado

  useEffect(() => {
    
    console.log('Executou o useEffect puro')
  })

  // 2 - e executado apenas uma vez
  useEffect(() => {
    somePuro()
    console.log('Executou o useEffect com array vaziu', puro)
  },[])

  // 3 - e executado sempre que o count mudar
  // useEffect(() => {
  //   setCount + 1
  //   console.log('Executou o useEffect com dependencias', count)
  // }, [count])

  // 4 - usando o cleanUp para garantir o funcionamento
  // nao fazer pode gerar errors cou comportamentos indesejados
  // o contador de pagina que pode continuar rodando quando a pagina for mudada

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Executou o useEffect com cleanup')
      //setCount(count + 1)
      console.log('Executou o useEffect com dependencias', count)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
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

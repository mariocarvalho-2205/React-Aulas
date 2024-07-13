import { useState } from'react'
import { UsePrevious } from './hooks/UsePrevious'

import './App.css'

function App() {
  const [ number, setNumber ] = useState(0)
  const previousValue = UsePrevious(number)

  return (
    <>
      <h1>Hello World</h1>
      <p>Atual: {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar</button>
    </>
  )
}

export default App

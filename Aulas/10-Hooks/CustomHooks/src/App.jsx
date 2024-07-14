import { useState } from'react'
import { UsePrevious } from './hooks/UsePrevious'

import './App.css'

function App() {
  const [ number, setNumber ] = useState(0)
  const previousValue = UsePrevious(number.toFixed(2))

  return (
    <>
      <h1>Hello World</h1>
      <p>Atual: {number.toFixed(2)}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar</button>
    </>
  )
}

export default App

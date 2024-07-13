import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseLayoutEffect from './components/UseLayoutEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseLayoutEffect />
    </>
  )
}

export default App

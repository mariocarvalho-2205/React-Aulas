import { useCallback, useState } from 'react'
import List from './List/List'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const getItemsFromDatabase = useCallback(() => {
    return ["a", "b", "c", "d","e"]
  }, [])

  return (
    <>
      <h2>UseCallback</h2>
      <List getItems={getItemsFromDatabase} />
      <button onClick={() => setCount(count + 1)}>Alterar</button>
      <p>{count}</p>
    </>
  )
}

export default App

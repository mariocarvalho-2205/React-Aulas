// import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../../src/components/ChanggeCounter'

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

const Home = () => {
  // const { counter} = useContext(CounterContext)
  const { counter } = useCounterContext()

  return (
    <div>
      <h1>Home</h1>
      <ChangeCounter />
      <p>{counter}</p>
    </div>
  );
}

export default Home
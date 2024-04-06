// import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../../src/components/ChanggeCounter'

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - context complexo
import { useTitleColorContext } from '../hooks/useTilteColorContext'


const Home = () => {
  // const { counter} = useContext(CounterContext)
  const { counter } = useCounterContext()

  // 5 contexto mais complexo
  const { color, dispatch } = useTitleColorContext()

  // 6 alterando o state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color})
  }
  

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <ChangeCounter />
      <p>{counter}</p>
      {/* 6 alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
}

export default Home
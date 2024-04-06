// import { useContext } from 'react'
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../../src/components/ChanggeCounter";

import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTilteColorContext"; 
const About = () => {


  
  // 5 contexto mais complexo
  const { color } = useTitleColorContext()
  const { counter } = useCounterContext()
  return (
    <div>
      <h1 style={{ color: color}}>About</h1>
      <ChangeCounter />
      <p>{counter}</p>
    </div>
  );
}

export default About
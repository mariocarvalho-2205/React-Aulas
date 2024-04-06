// import { useContext } from 'react'
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../../src/components/ChanggeCounter";

import { useCounterContext } from "../hooks/useCounterContext"
const About = () => {
  const { counter } = useCounterContext()
  return (
    <div>
      <h1>About</h1>
      <ChangeCounter />
      <p>{counter}</p>
    </div>
  );
}

export default About
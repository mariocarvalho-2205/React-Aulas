import { useContext } from 'react'
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../../src/components/ChanggeCounter";

const About = () => {
  const { counter } = useContext(CounterContext)
  return (
    <div>
      <h1>About</h1>
      <ChangeCounter />
      <p>{counter}</p>
    </div>
  );
}

export default About
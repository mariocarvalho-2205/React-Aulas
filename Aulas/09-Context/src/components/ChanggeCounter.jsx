import {useContext} from 'react'
import { CounterContext } from '../context/CounterContext';

const ChangeCounter = () => {
const { counter, setCounter } = useContext(CounterContext);


  return (
    <div>
      <h2>ChangeCounter</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        Remove value to counter
      </button>
    </div>
  );
}

export default ChangeCounter
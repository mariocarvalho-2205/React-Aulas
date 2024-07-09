import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const numberRef = useRef(0);
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  const inputRef = useRef();
  const [text, setText ] = useState("") 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    setText("")
    inputRef.current.focus()
  }

  return (
    <>
      <h1>Use Ref</h1>
      <p>useRef {numberRef.current}</p>
      <p>number 1 {number}</p>
      <button onClick={() => setNumber(number + 1)}>Somar Number 1 </button>
      <p>number 2 {number2}</p>
      <button onClick={() => setNumber2(number2 + 1)}>Somar Number 2 </button>
      <br />
      {/* useRef  e Dom */}

      <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
      <input type="submit" value="Enviar" onClick={(e) => handleSubmit(e)}/>
    </>
  );
}

export default App;

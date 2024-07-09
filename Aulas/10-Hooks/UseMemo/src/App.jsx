import { useState, useEffect, useMemo } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState(0);

  // const premiumNumbers = ["0", "10", "100", "200"];
  const premiumNumbers = useMemo(() => {
    // console.log('foi alterado')
    return ["0", "10", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("premium number foi alterado");
  }, [premiumNumbers]);

  return (
    <>
      <h2>UseMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? <p>Acertou!!</p> : <p>Errou</p>}
      <hr />
    </>
  );
}

export default App

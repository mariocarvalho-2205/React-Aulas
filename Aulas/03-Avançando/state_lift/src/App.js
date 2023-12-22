import './App.css';
import Filho from "./components/Filho.jsx"
import Irmao from "./components/Irmao.jsx"
import { useState } from 'react';

function App() {


  const [ msgDaddy, setMsgDaddy ] = useState('')

  const handleMsg = (msg => {
    setMsgDaddy(msg)
  })


  return (
    <div className="App">
      <h1>Pai</h1>
      
      <Filho msg={msgDaddy}/>
      <Irmao handleMsg={handleMsg}/>
      
      
      
    </div>
  );
}

export default App;

import './App.css';
import UserNameProps from './components/UserNameProps.jsx';
import { useState } from 'react'

function App() {
  const name = "Mario Carvalho"
  const [ nomen ] = useState('Tenorio') 

  return (
    <div className="App">
      <h1>Props</h1>
      <p>O nome passado na props e {name}</p>
      <UserNameProps name='Sergio' sobrenome='Carvalho' age={48} family={nomen}/>

    </div>
  );
}

export default App;

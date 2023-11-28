import Primeiro from './components/Primeiro/Primeiro.jsx'
import Segundo from './components/Segundo/Segundo.jsx'

import './App.css';


function App() {
  return (
    <div className="App">
      <Primeiro/>
      <h2>segundo componente exibido no App</h2>
      <Segundo/>
      
      
    </div>
  );
}

export default App;

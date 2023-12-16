import './App.css';
import Funcao from './components/Funcao.jsx'

function App() {

  function showMensage () {
    console.log('veio')
  }


  return (
    <div className="App">
      <h1>Função passada na props</h1>
      
      <Funcao viaApp={showMensage}/>
    </div>
  );
}

export default App;

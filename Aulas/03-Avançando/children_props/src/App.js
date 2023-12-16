import './App.css';
import Filho from "./components/Filho"

function App() {
  return (
    <div className="App">
      <h1>Children Props Pai</h1>
      <Filho>
        <h2>Passado pelo Pai e Sendo Impresso no Componente Filho</h2>
      </Filho>
      <Filho />
    </div>
  );
}

export default App;

import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  return (
    <div className="App">
      <CarDetails brand='GM' modelo='Onix' novo={true}/>
      <CarDetails brand='Fiat' modelo='Toro' novo={false}/>
      <CarDetails brand='Ford' modelo='Fusion' novo={false}/>
    </div>
  );
}

export default App;

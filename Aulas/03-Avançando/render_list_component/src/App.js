import './App.css';
import List from "./components/list.jsx"

function App() {
  const Cars = [
    {id: 1, brand: "Mercedes", color: "Prata", newCar: true}, 
    {id: 2, brand: "Audi", color: "Azul", newCar: true},
    {id: 3, brand: "BMW", color: "Cinza", newCar: false},
    {id: 4, brand: "Ferrari", color: "Amarela", newCar: true},
    {id: 5, brand: "Bugatti", color: "Preto", newCar: false},
    ]

  return (
    <div className="App">
      <h1> Render List in Component</h1>
      <h3>Reutilização com loop
          Os arrays de dados podem ter muitos itens também;
          Então o correto é utilizar uma estrutura de loop (map) para a sua 
          exibição;
          E com isso conseguimos conciliar os três conceitos: renderização de 
          listas, reaproveitamento de componentes e props;
          Vamos ver na prática!
      </h3>
      
      {Cars.map((car) => (
        <List id={car.id} brand={car.brand} color={car.color} newCar={car.newCar}/>
      ))}
    </div>
  );
}

export default App;

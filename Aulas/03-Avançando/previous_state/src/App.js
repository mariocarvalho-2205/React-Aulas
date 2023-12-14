import { useState } from "react";
import './App.css';

function App() {

  const [ listName, setListName ] = useState([
    {
    id: 1,
    name: "mario",
    age: 48
  },
  {
    id: 2,
    name: "ady",
    age: 48
  },
  {
    id: 3,
    name: "sergio",
    age: 40
  }
])


const deleteRandom = () => {
  const randomNumber = Math.floor(Math.random() * 4)
  console.log(randomNumber)
  setListName((prevListName) => {
    return prevListName.filter((user) => randomNumber !== user.id);
  })
};


  return (
    <div className="App">
      <p>Previous state é um recurso que nos permite pegar o dado em seu valor 
original dentro de um set de dado;
● Isso é muito utilizado para modificar listas, pois temos o valor antigo e 
transformamos em um valor novo;
● O primeiro argumento de um set sempre será o previous state;
● Vamos ver na prática!</p>
      <ul>
        {listName.map((listName) => (
          <li key={listName.id}>{listName.name} {listName.age}</li>


        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random</button>
    </div>
  );
}

export default App;

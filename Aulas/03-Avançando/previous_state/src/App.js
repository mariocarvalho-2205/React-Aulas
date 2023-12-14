import { useState } from "react";
import './App.css';
import FuncaoInicializadora from "./components/FuncaoInicializadora";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [ num, setNum] = useState(0);
  const [ number, setNumber ] = useState(0)
  const [ dados, setDados ] = useState({
    nome: "Mario",
    sobrenome: "Cavalho"
  })

  const [ person, setPerson ] = useState({
    nome: "Mario",
    caracteristicas: {
      idade: 48,
      sexo: "masculino"
    }
  })

  function changeNamePerson (e) {
    setPerson({
      ...person,
      nome: e.target.value
    });
  };

  function changeIdadePerson (e) {
    setPerson({
      ...person,
      caracteristicas: {
        ...person.caracteristicas,
        idade: e.target.value,

      }
    })
  }

    function changeSexoPerson(e) {
      setPerson({
        ...person,
        caracteristicas: {
          ...person.caracteristicas,
          sexo: e.target.value,
        },
      });
    }

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

function increment () {
  setNum(num + 1)
}

function decrement () {
  setNum(num - 1)
}

function somando() {
  setNumber((number) => number + 1)
}



const deleteRandom = () => {
  const randomNumber = Math.floor(Math.random() * 4)
  console.log(randomNumber)
  setListName((prevListName) => {
    return prevListName.filter((user) => randomNumber !== user.id);
  })
};


  return (
    <div className="App">
      <TodoList/>
      <p>
        Previous state é um recurso que nos permite pegar o dado em seu valor
        original dentro de um set de dado; ● Isso é muito utilizado para
        modificar listas, pois temos o valor antigo e transformamos em um valor
        novo; ● O primeiro argumento de um set sempre será o previous state; ●
        Vamos ver na prática!
      </p>
      <ul>
        {listName.map((listName) => (
          <li key={listName.id}>
            {listName.name} {listName.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random</button>
      <p>{num}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>atualizador</p>
      <p>{number}</p>
      <button onClick={() => somando()}>+1</button>
      <button
        onClick={() => {
          somando();
          somando();
          somando();
        }}
      >
        +3
      </button>
      <br />
      <p>
        Previo - {dados.nome}
        {dados.sobrenome}
      </p>
      <label htmlFor="">
        Nome:
        <input
          type="text"
          value={dados.nome}
          onChange={(e) => {
            setDados({
              ...dados,
              nome: e.target.value,
            });
          }}
        />
      </label>
      <label htmlFor="">
        Sobrenome:
        <input
          type="text"
          value={dados.sobrenome}
          onChange={(e) => {
            setDados({
              ...dados,
              sobrenome: e.target.value,
            });
          }}
        />
      </label>
      <h2>Form Person</h2>
      <h4>
        {person.nome} {person.caracteristicas.idade}{" "}
        {person.caracteristicas.sexo}
      </h4>
      <label htmlFor="">
        Nome Person:
        <input type="text" value={person.nome} onChange={changeNamePerson} />
      </label>
      <label htmlFor="">
        Caracteristicas Person Idade
        <input
          type="text"
          value={person.caracteristicas.idade}
          onChange={changeIdadePerson}
        />
      </label>
      <label htmlFor="">
        Caracteristicas Person Sexo
        <input
          type="text"
          value={person.caracteristicas.sexo}
          onChange={changeSexoPerson}
        />
      </label>
      <hr />
      <FuncaoInicializadora/>

    </div>
  );
}

export default App;

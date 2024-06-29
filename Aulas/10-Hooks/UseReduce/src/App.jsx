import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });
  
  // utilizando a action
  const initialTasks = [
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Redux" },
    { id: 3, title: "Build something fun" },
  ];
  
  const [ taskText, setTaskText ] = useState("");
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        const newTask = {
          id: Math.random(),
          title: taskText,
        }
        setTaskText("");
        return [...state, newTask];
        case "DELETE":
          return state.filter((task) => task.id !== action.id);
          default:
            return state;

    }
  };

  // criando o a função que ativara o reduce
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "ADD_TASK" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id});
  }
  return (
    <>
      <h1>teste {number}</h1>
      <input type="submit" onClick={dispatch} />
      <h3>Tarefas</h3>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
        <input type="submit" value="Adicionar" />
      </form>
      <ul>
        {tasks.map((task) => (
          <div key={task.id}>
            <li style={{cursor: "pointer"}} onDoubleClick={() => removeTask(task.id)}>{task.title}</li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;

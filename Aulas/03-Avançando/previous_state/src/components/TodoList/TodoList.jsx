import React, { useState } from 'react'
import AddTodo from "../TodoList/AddTodo"
import TaskList from "../TodoList/TaskList";

let nextId = 3;
const inicialTodo = [
    { id: 0, title: "buy Desk", done: true },
    { id: 1, title: "Check Box", done: false },
    { id: 2, title: "Yan Ping", done: false },
];

const TodoList = () => {

    const [ todos, setTodos ] = useState(inicialTodo)

    // adiciona item
    function handleAddTodo (title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    function handleChangeTodo (nextTodo) {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t
            }
        }))
    }

    function handleDeleteTodo(todoId) {
        setTodos(todos.filter(t => t.id !== todoId))
    }

  return (
    <div>
      <h1>TodoList</h1>
        <AddTodo 
            onAddTodo={handleAddTodo}
        />
        <TaskList 
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
        />
    </div>
  );
}

export default TodoList
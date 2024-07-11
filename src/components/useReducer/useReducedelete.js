import React, { useState } from 'react';

function TodoApp() {
  // Initial state of the todo list
  const [todos, setTodos] = useState([
    { id: 1, text: 'wake at 6am' },
    { id: 2, text: 'breakfast at 9' },
    { id: 3, text: 'lunch at 12pm' },
  ]);

  // Function to remove a todo item by its id
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded" onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

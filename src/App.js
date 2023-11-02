import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { no: 1, task: 'Task 1', completed: false },
    { no: 2, task: 'Task 2', completed: false },
    { no: 3, task: 'Task 3', completed: false },
    { no: 4, task: 'Task 4', completed: false },
    { no: 5, task: 'Task 5', completed: false },
    { no: 6, task: 'Task 6', completed: false },
    { no: 7, task: 'Task 7', completed: false },
    { no: 8, task: 'Task 8', completed: false },
    { no: 9, task: 'Task 9', completed: false },
    { no: 10, task: 'Task 10', completed: false },
  ]);

  const clicked = (no) => {
    const updatedTodos = todos.map((todo) =>
      todo.no === no ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const progress = (completedCount / todos.length) * 100;

  return (
    <div className='border'>
      <h1>Todo List</h1>

        {todos.map((todo) => (
          <div key={todo.no}>
              {todo.task}
              <input type="checkbox" checked={todo.completed} onChange={() => clicked(todo.no)}/>
          </div>
        ))}
    <br></br>
      <ProgressBar progress={progress} /> <br></br>
    </div>
   
  );
}

function ProgressBar({ progress }) {
  return (
    <div>
     Task Completed : {progress} %
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>  
    </div>
    </div>
    </div>
  );
}

export default App;


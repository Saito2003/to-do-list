import { useState } from "react";
import "./App.css"

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    // Check if the task is not empty before adding
    if (task.trim() === "") {
      alert("Task cannot be empty!"); // Optional: show an alert message
      return;
    }

    // Add task to todos and reset the task input
    setTodos([...todos, task]);
    setTask("");
  };

  const resetList = () =>{
    setTodos([]);
  }


  const deleteTodo = (index) => [
    setTodos(todos.filter((_, i) =>i !==index))
  ]
  return (
  
    <div>
      <h1>My-To-do-list</h1>
      <h3>Add your tasks here</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add Task</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button onClick={() =>deleteTodo(index)}>Delete task</button>
          </li>
        ))}

      </ul>
      <button onClick={resetList}>Reset list</button>

      
    </div>
  );
}

export default App;

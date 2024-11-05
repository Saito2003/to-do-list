
import { useState } from "react";
import "./App.css";
//import "./todo.scss";


// Main App component
function App() {
  // State variables
  const [task, setTask] = useState("");            // Stores the current input task
  const [todos, setTodos] = useState([]);          // Stores the list of active tasks
  const [completedTodos, setCompletedTodos] = useState([]);  // Stores the list of completed tasks

  // Function to add a task to the active tasks list
  const addTodo = () => {
    // Check if task input is not empty
    if (task.trim() === "") {
      alert("Task cannot be empty!");   // Alert if task is empty
      return;
    }

    // Add new task to todos list and reset task input
    setTodos([...todos, task]);
    setTask("");
  };

  // Function to reset both active and completed tasks
  const resetList = () => {
    setTodos([]);           // Clear active tasks
    setCompletedTodos([]);   // Clear completed tasks
  };

  // Function to mark a task as done
  const markDone = (index) => {
    const completedTask = todos[index];            // Get the task to be marked as completed
    setCompletedTodos([...completedTodos, completedTask]);  // Add to completed tasks list
    setTodos(todos.filter((_, i) => i !== index));  // Remove from active tasks
  };

  // Function to delete a task from the active list
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));  // Filter out the task to delete by index
  };

  // Function to delete a task from the completed list
  const deleteCompletedTodo = (index) => {
    setCompletedTodos(completedTodos.filter((_, i) => i !== index));  // Filter out the completed task to delete
  };

  // Rendering the UI
  return (
    <div>
      <h1>My To-Do List</h1>
      <h3>Add your tasks here</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}   // Update task input on change
        placeholder="Enter a task..."
      />
      <button onClick={addTodo}>Add Task</button>   {/* Button to add task to the list */}
      
      <h3>Active Tasks</h3>
      <ol>
        {/* Map over active tasks to display each with 'Mark Done' and 'Delete' buttons */}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => markDone(index)}>Mark Done</button>     {/* Mark task as done */}
            <button onClick={() => deleteTodo(index)}>Delete Task</button> {/* Delete task */}
          </li>
        ))}
      </ol>
      
      <h3>Completed Tasks</h3>
      <ol>
        {/* Map over completed tasks to display each with a 'Delete' button */}
        {completedTodos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteCompletedTodo(index)}>Delete Task</button> {/* Delete completed task */}
          </li>
        ))}
      </ol>

      <button onClick={resetList}>Reset List</button>  {/* Button to reset all tasks */}
    </div>
  );
}

export default App;

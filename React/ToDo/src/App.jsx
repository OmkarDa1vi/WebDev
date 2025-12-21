import { useState } from "react";
import "./index.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const newTodo = {
      id: Date.now(),
      task: input,
    };

    if(input === "")
      return(0);

    setTodo([...todo, newTodo]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="card" draggable>
        <h1>ToDo App</h1>
        <div className="input" draggable>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What is the task?"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div draggable className="list">
          <ul className="todo">
            {todo.map((todo) => (
              <li key={todo.id}>
                <span>{todo.task}</span>
                <button onClick={() => deleteTask(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

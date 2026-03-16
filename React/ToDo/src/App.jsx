import { useState, useEffect } from "react";
import "./index.css";

const url = "http://localhost:5001";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTask = async () => {
    if (input === "") return;

    const newTodo = {
      task: input,
    };

    try {
      const res = await fetch(`${url}/todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      const savedTodoFromServer = await res.json();

      setTodo([...todo, savedTodoFromServer]);
      setInput("");
    } catch (err) {
      console.log("Error:", err);
    }
  };
  useEffect(() => {
    fetch(`${url}/todo`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteTask = (id) => {
    setTodo(todo.filter((t) => t._id !== id));
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
              <li key={todo._id}>
                <span>{todo.task}</span>
                <button onClick={() => deleteTask(todo._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

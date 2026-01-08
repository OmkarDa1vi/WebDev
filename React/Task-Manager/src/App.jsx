import TaskForm from "./components/form";
import TaskList from "./components/list";
import Filter from "./redux/filter";

function App() {
  return (
    <>
      <h2>Task Manager</h2>
      <TaskForm />
      <Filter />
      <TaskList />
    </>
  );
}

export default App;

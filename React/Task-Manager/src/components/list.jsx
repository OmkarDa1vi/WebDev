import { useSelector, useDispatch } from "react-redux";
import {
  editTask,
  deleteTask,
  toggleTask,
} from "../features/tasks/taskSlice";
import { getVisibleTasks } from "../features/tasks/taskSelectors";

function TaskList() {
  const tasks = useSelector((state) =>
    getVisibleTasks(state.tasks, state.filter)
  );
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} ({task.completed ? "Done" : "Pending"})
          <button onClick={() => dispatch(toggleTask())}>Toggle</button>
          <button onClick={() => dispatch(editTask())}>Edit</button>
          <button onClick={() => dispatch(deleteTask())}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

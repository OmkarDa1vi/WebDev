import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

function TaskForm() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(addTask())}>
      Add Task
    </button>
  );
}

export default TaskForm;

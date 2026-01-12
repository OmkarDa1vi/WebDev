import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTicket } from "../redux/ticketSlicer";

function addTask() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTicket(task));
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
} 
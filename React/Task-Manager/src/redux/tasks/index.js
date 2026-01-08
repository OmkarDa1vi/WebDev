import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask: (state) => {
      const title = "";
      return [
        ...state,
        {
          id: Date.now(),
          title,
          completed: false,
        },
      ];
    },

    editTask: (state) => {
      const id = prompt("Enter ID");
      const newTitle = prompt("Enter New Title");

      return state.map((task) => {
        task.id === id ? { ...task, title: newTitle } : task;
      });
    },

    deleteTask: (state) => {
      const id = prompt("Enter ID");
      return state.filter((task) => task.id !== id);
    },

    filterTask: (state) => {
      const filter = prompt("Enter Filter");
      return state.filter((task) =>
        task.title.toLowerCase().includes(filter.toLowerCase())
      );
    },
  },
});

export const {addTask, editTask, deleteTask, filterTask} = taskSlice.actions;
export default taskSlice.reducer;
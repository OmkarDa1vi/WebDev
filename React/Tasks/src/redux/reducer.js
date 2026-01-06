import { ADD, DELETE, EDIT } from "./taskSlice";

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case EDIT: {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, title: action.payload.title };
        }
        return task;
      });

      return {
        ...state,
        tasks: updatedTasks,
      };
    }

    default:
      return state;
  }
};


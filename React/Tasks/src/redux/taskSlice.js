export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

export const addTask = (task) => ({
    type: ADD,
    payload: {
        id: Date.now(),
        task,
        completed: false,
    },
})

export const deleteTask = (id) => ({
    type: DELETE,
    payload: id,
})

export const editTask = (id, task) => ({
    type: EDIT,
    payload: {
        id,
        task,
    }    
})
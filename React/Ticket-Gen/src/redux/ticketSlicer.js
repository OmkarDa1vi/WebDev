export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const UPDATE = "UPDATE";

export const addTicket = (task) => ({
    type: ADD,
    id: Date.now(),
    task, 
    completed: false
});

export const removeTicket = (id) => ({
    type: REMOVE,
    id
});

export const updateTicket = (id, task) => ({
    type: UPDATE,
    id,
    task
});


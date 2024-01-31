import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from "./TodoReducer";

export const addTask = (text) => {
  return {
    type: ADD_TASK,
    payload: { text },
  };
};

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: { id },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: { id },
  };
};

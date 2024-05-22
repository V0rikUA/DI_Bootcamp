export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = { id: Date.now(), text: action.text, completed: false };
      return [...state, newTask];
    case COMPLETE_TASK:
      return state.map((task) => {
        return task.id === action.id
          ? { ...task, completed: !task.completed }
          : task;
      });

    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.id);
    case EDIT_TASK:
      return [...state];
    default:
      return [...state];
  }
};

const initalState = {
  todos: [{ id: 1, text: "some text", completed: false }],
};

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const todoReducer = (state = initalState, action) => {
  if (action.type === ADD_TASK) {
    const { text } = action.payload;
    const id = Date.now();
    return {
      ...state,
      todos: [...state.todos, { id, text, completed: false }],
    };
  }
  if (action.type === TOGGLE_TASK) {
    const { id } = action.payload;
    return {
      ...state,
      todos: state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    };
  }
  if (action.type === REMOVE_TASK) {
    const { id } = action.payload;
    return {
      ...state,
      todos: state.todos.filter((task) => task.id !== id),
    };
  }
  return { ...state };
};

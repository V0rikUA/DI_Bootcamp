import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../features/TodoReducer.js";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

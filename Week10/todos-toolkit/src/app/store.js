import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todos/todosSlice";
import usersReducer from "../features/users/usersSlice";
import postRducer from "../features/posts/postsSlice";

import { addTask, addPosts } from "../features/todos/todosSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: usersReducer,
    posts: postRducer,
  },
});

export default store;

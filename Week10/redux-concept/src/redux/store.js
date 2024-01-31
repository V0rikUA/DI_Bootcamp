import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

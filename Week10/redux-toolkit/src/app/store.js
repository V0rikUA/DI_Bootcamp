import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// const thunkExample = (dispatch, getState) => {
//   const stateBefore = getState();
//   console.log("prev state =>  ", stateBefore);

//   setTimeout(() => {
//     dispatch(addTask({ text: "someText" }));
//   }, 5000);

//   console.log("current state =>  ", getState());
// };

// // store.dispatch(thunkExample);

//store.dispatch(addThunkTask("bldlsldf"));
export default store;

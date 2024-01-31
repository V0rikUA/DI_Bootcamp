import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const addThunkTask = (text) => (dispatch) => {
  //alse a return dispatch....
  setTimeout(() => {
    dispatch(addTask({ text }));
  }, 5000);
};

export const addAsyncTask = createAsyncThunk("todos/delayedtask", (text) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(text);
    }, 5000);
  });
});

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const { text } = action.payload;
      state.push({ id: nanoid(), text, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(addAsyncTask.fulfilled, (state, action) => {
      const text = action.payload;
      state.push({ id: nanoid(), text, completed: false });
    });
  },
});

export const { addTask, toggleTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;

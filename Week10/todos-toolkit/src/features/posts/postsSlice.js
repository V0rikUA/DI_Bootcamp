import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle", //"loaing", "succeeded", "failed"
  author: -1,
};

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filterAuthor: (state, action) => {
      state.author = action.payload;
    },
    addReaction: (state, action) => {
      const { id, name } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.reactions[name]++;
      }
    },
    addPost: {
      reducer(state, action) {
        state.posts.unshift(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            body: content,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.status = "succeeded";
      const loadedPosts = action.payload.map((post) => {
        post.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        return post;
      });
      state.posts = loadedPosts;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

export const { addReaction, addPost, filterAuthor } = postSlice.actions;

export default postSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPosts } from "../../types/data";
import axios from "axios";

interface IPostSlice {
  posts: IPosts[];
  error: string | null;
}

const initialState: IPostSlice = {
  posts: [],
  error: null,
};

export const fetchPosts = createAsyncThunk<IPosts[], undefined, { rejectValue: string }>(
  "posts/fetch",

  async function (_, { rejectWithValue }) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    if (!response) {
      rejectWithValue("Error");
    }
    return await response.data;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export default postSlice.reducer;

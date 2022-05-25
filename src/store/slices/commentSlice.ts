import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IComments} from "../../types/data";
import axios from "axios";

interface ICommentSlice {
  comments: IComments[];
  error: string | null;
}

interface IAddComment {
    name: string;
    email: string;
    body: string;
    postId: number;
    id: string;
}

const initialState: ICommentSlice = {
    comments: [],
    error: null,
};

export const fetchComments = createAsyncThunk<IComments[], undefined, { rejectValue: string }>(
  "comments/fetchComments",

  async function (_, { rejectWithValue }) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    if (!response) {
      rejectWithValue("Error");
    }
    return await response.data;
  }
);

export const addComment = createAsyncThunk<IAddComment, IAddComment, {rejectValue:string}>(
    "comments/postComment",
    async function ({ ...post }, { rejectWithValue }) {
        const send = {
            name: post.name,
            email: post.email,
            body: post.body,
            postId: post.postId,
            id: post.id,
        };
        const response = await axios.post("https://jsonplaceholder.typicode.com/comments", send);
        if (!response) {
            rejectWithValue("Error");
        }
        return response.data;
    }
)


const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchComments.pending, (state) => {
            state.error = null;
          })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload;
          })
        .addCase(addComment.pending, (state) =>{
            state.error = null
        })
        .addCase(addComment.fulfilled, (state,action) => {
            state.comments.push(action.payload)
        })
  },
});

export default commentSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUsers } from "../../types/data";
import axios from "axios";

interface IUserSlice {
  users: IUsers[];
  error: string | null;
}

const initialState: IUserSlice = {
  users: [],
  error: null,
};

export const fetchUsers = createAsyncThunk<IUsers[], undefined, { rejectValue: string }>(
  "users/fetchUsers",

  async function (_, { rejectWithValue }) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (!response) {
      rejectWithValue("Error");
    }
    return await response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
      .addCase(fetchUsers.pending, (state)=>{
            state.error = null;
      })
      .addCase(fetchUsers.fulfilled,(state, action)=>{
          state.users = action.payload
      })
  }
});

export default userSlice.reducer;

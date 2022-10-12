import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//create the action

export const fetchPost = createAsyncThunk(
  "post/list",
  async (payload, { rejectedWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

const postSlices = createSlice({
  name: "post",
  initialState: {},
  extraReducers: {
    //handling pending state
    [fetchPost.pending]: (state, action) => {
      state.loading = true;
    },
    //handling fulfilled
    [fetchPost.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.loading = false;
    },
    //handling rejected
    [fetchPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlices.reducer;

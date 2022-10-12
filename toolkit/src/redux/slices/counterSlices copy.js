import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value++;
    },
    decrement: (state, action) => {
      state.value--;
    },
    increaseByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// generate actions creators
export const { increment, decrement, increaseByAmount } = counterSlices.actions;

// export reducers

export default counterSlices.reducer;

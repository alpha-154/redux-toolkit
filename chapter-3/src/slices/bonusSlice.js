// Importing necessary functions from Redux Toolkit
import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 11, // Initial state for bonus points
};

const incrementByAmount = createAction("account/incrementByAmount"); // Creating action for incrementing by amount

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1; // Incrementing points by 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points += 1; // Incrementing points by 1 if payload is >= 100
      }
    });
  },
});

// Exporting action creators for each reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;

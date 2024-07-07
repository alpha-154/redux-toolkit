// Importing necessary functions from Redux Toolkit
import { createAction, createReducer } from "@reduxjs/toolkit";

// Creating actions for incrementing and incrementing by amount
export const increment = createAction("reward/increment");
export const incrementByAmount = createAction("reward/incrementByAmout");

const initialState = {
  points: 15, // Initial state for reward points
};

// Creating reducer with cases for the actions
const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++; // Incrementing points by 1
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += action.payload; // Incrementing points by specified value
    });
});

export default rewardReducer;

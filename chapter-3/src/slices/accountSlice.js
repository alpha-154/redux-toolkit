// Importing necessary functions from Redux Toolkit and Axios
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 10, // Initial state for account amount
};

// Async thunk for fetching user account data
export const getUserAccount = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8080/accounts/${userId}`
    );
    return data.amount; // Returning fetched amount
  }
);

// Creating account slice with reducers and extra reducers
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1; // Incrementing amount by 1
    },
    decrement: (state) => {
      state.amount -= 1; // Decrementing amount by 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload; // Incrementing amount by specified value
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.fulfilled, (state, action) => {
        state.amount = action.payload; // Updating amount on successful fetch
        state.pending = false;
      })
      .addCase(getUserAccount.pending, (state, action) => {
        state.pending = true; // Setting pending state on fetch start
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        state.error = action.error; // Setting error on fetch failure
        state.pending = false;
      });
  },
});

// Exporting action creators for each reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;

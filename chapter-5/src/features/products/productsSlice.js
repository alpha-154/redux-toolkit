// Import createAsyncThunk and createSlice from @reduxjs/toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Import fetchProducts function from productsAPI
import { fetchProducts } from "./productsAPI";

// Initial state for the products slice
const initialState = {
  products: [],
  status: "idle",
};

// Define async thunk to fetch products from the API
export const fetchAsync = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const response = await fetchProducts();
    return response.data;
  }
);

// Create products slice
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state of fetchAsync
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      // Handle fulfilled state of fetchAsync
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

// Export the reducer as the default export
export default productsSlice.reducer;

// Import createAsyncThunk and createSlice from @reduxjs/toolkit
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Import cart API functions
import { fetchItems, addItem, updateItem, deleteItem } from './cartAPI';

// Initial state for the cart slice
const initialState = {
  items: [],
  status: 'idle',
};

// Define async thunk to fetch cart items from the API
export const fetchAsync = createAsyncThunk(
  'cart/fetchItems',
  async () => {
    const response = await fetchItems();
    return response.data;
  }
);

// Define async thunk to add an item to the cart via the API
export const addAsync = createAsyncThunk(
  'cart/addItem',
  async (item) => {
    const { id, title, brand, thumbnail, price } = item;
    const response = await addItem({ id, title, brand, thumbnail, price, quantity: 1 });
    return response.data;
  }
);

// Define async thunk to delete an item from the cart via the API
export const deleteAsync = createAsyncThunk(
  'cart/deleteItem',
  async (id) => {
    await deleteItem(id);
    return id;
  }
);

// Define async thunk to update an item in the cart via the API
export const updateAsync = createAsyncThunk(
  'cart/updateItem',
  async ({ id, change }) => {
    const response = await updateItem(id, change);
    return response.data;
  }
);

// Create cart slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state of fetchAsync
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      // Handle fulfilled state of fetchAsync
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      // Handle fulfilled state of addAsync
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      // Handle fulfilled state of deleteAsync
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
      })
      // Handle fulfilled state of updateAsync
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id);
        state.items.splice(index, 1, action.payload);
      });
  },
});

// Export the reducer as the default export
export default cartSlice.reducer;

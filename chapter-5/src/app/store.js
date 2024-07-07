// Import configureStore from @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import products reducer
import productsReducer from "../features/products/productsSlice";
// Import cart reducer
import cartReducer from "../features/cart/cartSlice";

// Configure the Redux store with products and cart reducers
export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
  },
});

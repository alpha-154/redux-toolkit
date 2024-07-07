// Import React and necessary hooks
import React, { useState, useEffect } from "react";
// Import CSS file for styling
import "./App.css";
// Import Products and Cart components
import { Products } from "./features/products/Products";
import { Cart } from "./features/cart/Cart";
// Import useSelector and useDispatch hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
// Import fetchAsync action from cartSlice
import { fetchAsync } from "./features/cart/cartSlice";

// Define the App component
function App() {
  // State to toggle cart visibility
  const [showCart, setShowCart] = useState(false);
  // Get cart items from the Redux store
  const items = useSelector((state) => state.cart.items);
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Fetch cart items when the component mounts
  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  // Render the component
  return (
    <div className="App">
      {/* Button to toggle cart visibility */}
      <button onClick={() => setShowCart(!showCart)}>
        Cart [ {items.length} ]
      </button>
      {/* Show Cart component if showCart is true, otherwise show Products component */}
      {showCart ? <Cart /> : <Products />}
    </div>
  );
}

// Export the App component as the default export
export default App;

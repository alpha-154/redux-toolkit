// Import React and necessary hooks
import React, { useEffect, useState } from "react";
// Import useSelector and useDispatch hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
// Import CSS file for styling
import "./Cart.css";
// Import deleteAsync and updateAsync actions from cartSlice
import { deleteAsync, updateAsync } from "./cartSlice";

// Define the Cart component
export function Cart() {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();
  // Get cart items from the Redux store
  const items = useSelector((state) => state.cart.items);

  // Handle quantity change for a cart item
  const handleChange = (e, id) => {
    dispatch(updateAsync({ id, change: { quantity: +e.target.value } }));
  };

  // Render the component
  return (
    <div>
      <div>
        {/* Map over the cart items array and render each item */}
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img className="img-fluid" src={item.thumbnail} alt="" />
            <div className="description">
              <p>{item.title}</p>
              <span>{item.brand}</span>
              <strong>${item.price}</strong>
            </div>
            <div className="quantity">
              Quantity
              <select
                value={item.quantity}
                onChange={(e) => handleChange(e, item.id)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className="close">
              <button onClick={() => dispatch(deleteAsync(item.id))}>X</button>
            </div>
          </div>
        ))}
      </div>
      {/* Display the total price of the items in the cart */}
      <h1>
        Total: {items.reduce((acc, item) => item.price * item.quantity + acc, 0)}
      </h1>
    </div>
  );
}

// Import React and necessary hooks
import React, { useState, useEffect } from "react";
// Import useSelector and useDispatch hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
// Import fetchAsync action from productsSlice
import { fetchAsync } from "./productsSlice";
// Import addAsync action from cartSlice
import { addAsync } from "../cart/cartSlice";
// Import CSS file for styling
import "./Products.css";

// Define the Products component
export function Products() {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();
  // Get products from the Redux store
  const products = useSelector((state) => state.product.products);

  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  // Render the component
  return (
    <div>
      <div>
        {/* Map over the products array and render each product */}
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%" }}
            />
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <p>
              {/* Button to add product to the cart */}
              <button onClick={() => dispatch(addAsync(product))}>
                Add to Cart
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

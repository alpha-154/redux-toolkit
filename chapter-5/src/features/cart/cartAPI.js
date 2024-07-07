// Import axios for making HTTP requests
import axios from 'axios';

// Function to fetch cart items from the API
export function fetchItems() {
  return axios.get('http://localhost:8080/cart');
}

// Function to add an item to the cart via the API
export function addItem(item) {
  return axios.post('http://localhost:8080/cart', item);
}

// Function to update an item in the cart via the API
export function updateItem(id, itemUpdate) {
  return axios.patch(`http://localhost:8080/cart/${id}`, itemUpdate);
}

// Function to delete an item from the cart via the API
export function deleteItem(id) {
  return axios.delete(`http://localhost:8080/cart/${id}`);
}

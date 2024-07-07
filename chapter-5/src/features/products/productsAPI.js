// Import axios for making HTTP requests
import axios from 'axios';

// Function to fetch products from the API
export function fetchProducts() {
  return axios.get('http://localhost:8080/products');
}

// Import React
import React from "react";
// Import ReactDOM for rendering the application
import ReactDOM from "react-dom/client";
// Import Provider from react-redux to connect the Redux store to the app
import { Provider } from "react-redux";
// Import the Redux store
import { store } from "./app/store";
// Import the App component
import App from "./App";
// Import CSS file for styling
import "./index.css";

// Start a JSON server for development
// server -> json-server db.json -p 8080

// Render the App component into the root DOM node, wrapped with the Redux Provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

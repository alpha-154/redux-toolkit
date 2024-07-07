// Importing necessary libraries and components
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Main App component
import "./index.css"; // Global CSS file
import { configureStore } from "@reduxjs/toolkit"; // Redux store configuration
import accountReducer from "./slices/accountSlice"; // Account slice reducer
import bonusReducer from "./slices/bonusSlice"; // Bonus slice reducer
import { Provider } from "react-redux"; // React-Redux provider component
import rewardReducer from "./reducers/reward"; // Reward reducer
import { adminApi } from './api/adminSlice';


// Command to start the JSON server
// `json-server db.json -p 8080`

// Configuring the Redux store with the reducers
const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
    [adminApi.reducerPath]:adminApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),

});

// Rendering the main React application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* Strict mode for highlighting potential problems */}
    <Provider store={store}>
      {" "}
      {/* Providing the Redux store to the app */}
      <App /> {/* Main App component */}
    </Provider>
  </React.StrictMode>
);


/****************    pure redux    **************/  


//in order to run `db.json` file through server , run this 
//command in the terminal `npm i -g json-server` (don't 
//have to run now) & then run this command `json-server 
//db.json` to initiate the server in a specific port


import { createStore, applyMiddleware, combineReducers } from 'redux'; // Import Redux functions for creating the store and applying middleware
import logger from 'redux-logger'; // Import redux-logger for logging actions
import thunk from 'redux-thunk'; // Import redux-thunk for handling asynchronous actions
import axios from 'axios'; // Import axios for making HTTP requests

// Action name constants
const inc = 'account/increment'; // Increment action for account
const dec = 'account/decrement'; // Decrement action for account
const incByAmt = 'account/incrementByAmount'; // Increment by amount action for account
const getAccUserPending = 'account/getUser/pending'; // Pending state action for fetching user
const getAccUserFulFilled = 'account/getUser/fulfilled'; // Fulfilled state action for fetching user
const getAccUserRejected = 'account/getUser/rejected'; // Rejected state action for fetching user
const incBonus = 'bonus/increment'; // Increment action for bonus

// Create the Redux store with combined reducers and applied middleware
const store = createStore(
  combineReducers({
    account: accountReducer, // Combine account reducer
    bonus: bonusReducer // Combine bonus reducer
  }),
  applyMiddleware(logger.default, thunk) // Apply middleware for logging and handling async actions
);

const history = []; // Initialize an array to store state history

// Account reducer function
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getAccUserFulFilled:
      return { amount: action.payload, pending: false }; // Handle fulfilled action
    case getAccUserRejected:
      return { ...state, error: action.error, pending: false }; // Handle rejected action
    case getAccUserPending:
      return { ...state, pending: true }; // Handle pending action
    case inc:
      return { amount: state.amount + 1 }; // Handle increment action
    case dec:
      return { amount: state.amount - 1 }; // Handle decrement action
    case incByAmt:
      return { amount: state.amount + action.payload }; // Handle increment by amount action
    default:
      return state; // Default case returns current state
  }
}

// Bonus reducer function
function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incBonus:
      return { points: state.points + 1 }; // Handle bonus increment action
    case incByAmt:
      if (action.payload >= 100) return { points: state.points + 1 }; // Handle increment by amount if condition met
    default:
      return state; // Default case returns current state
  }
}

// Asynchronous action creator to fetch user account data
function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPending()); // Dispatch pending action
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`); // Make HTTP request to get user account data
      dispatch(getAccountUserFulFilled(data.amount)); // Dispatch fulfilled action with fetched data
    } catch (error) {
      dispatch(getAccountUserRejected(error.message)); // Dispatch rejected action with error message
    }
  };
}

// Action creators
function getAccountUserFulFilled(value) {
  return { type: getAccUserFulFilled, payload: value }; // Create fulfilled action
}

function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error: error }; // Create rejected action
}

function getAccountUserPending() {
  return { type: getAccUserPending }; // Create pending action
}

function increment() {
  return { type: inc }; // Create increment action
}

function decrement() {
  return { type: dec }; // Create decrement action
}

function incrementByAmount(value) {
  return { type: incByAmt, payload: value }; // Create increment by amount action
}

function incrementBonus() {
  return { type: incBonus }; // Create bonus increment action
}

// Dispatch actions after a delay
setTimeout(() => {
  store.dispatch(getUserAccount(2)); // Dispatch getUserAccount action with ID 2
  // store.dispatch(incrementByAmount(200)) // Dispatch incrementByAmount action (commented out)
  // store.dispatch(incrementBonus()); // Dispatch incrementBonus action (commented out)
}, 2000); // Delay of 2 seconds

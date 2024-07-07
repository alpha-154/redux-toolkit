// Importing necessary hooks and actions
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  getUserAccount,
} from "../slices/accountSlice";

function Account() {
  const [value, setValue] = useState(0); // Local state for input value

  const dispatch = useDispatch(); // Redux dispatch hook
  const amount = useSelector((state) => state.account.amount); // Selecting account amount from the Redux store

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount: ${amount}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>{" "}
        {/* Increment button */}
        <button onClick={() => dispatch(decrement())}>Decrement -</button>{" "}
        {/* Decrement button */}
        <input
          type="text"
          onChange={(e) => setValue(+e.target.value)}
        ></input>{" "}
        {/* Input field */}
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>{" "}
        {/* Increment by value button */}
        <button onClick={() => dispatch(getUserAccount(1))}>
          Get User
        </button>{" "}
        {/* Fetch user account button */}
      </div>
    </div>
  );
}

export default Account;

// Importing necessary hooks and actions
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reducers/reward";

function Reward() {
  const dispatch = useDispatch(); // Redux dispatch hook
  const points = useSelector((state) => state.reward.points); // Selecting reward points from the Redux store

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total point: {points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>{" "}
        {/* Increment button */}
        <button onClick={() => dispatch(incrementByAmount(7))}>
          Increment By Seven +
        </button>{" "}
        {/* Increment by 7 button */}
      </div>
    </div>
  );
}

export default Reward;

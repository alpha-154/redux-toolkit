// Importing necessary hooks and actions
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";

function Bonus() {
  const dispatch = useDispatch(); // Redux dispatch hook
  const points = useSelector((state) => state.bonus.points); // Selecting bonus points from the Redux store

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total point: {points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>{" "}
        {/* Increment button */}
      </div>
    </div>
  );
}

export default Bonus;

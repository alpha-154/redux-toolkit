// Importing necessary hooks and components
import { useSelector } from "react-redux";
import "./App.css"; // App specific CSS
import Account from "./components/Account"; // Account component
import Bonus from "./components/Bonus"; // Bonus component
import Reward from "./components/Reward"; // Reward component

function App() {
  // Selecting account amount from the Redux store
  const amount = useSelector((state) => state.account.amount);
  // Selecting bonus points from the Redux store
  const points = useSelector((state) => state.bonus.points);

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount: {amount}</h3>
      <h3>Total Bonus: {points}</h3>
      <Account /> {/* Rendering Account component */}
      <Bonus /> {/* Rendering Bonus component */}
      <Reward /> {/* Rendering Reward component */}
    </div>
  );
}

export default App;

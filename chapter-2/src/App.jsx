import { useSelector } from 'react-redux';
import './App.css';
import Account from "./components/Account"
import Bonus from './components/Bonus';


//to start the server run `json-server db.json -p 8080`


function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const account = useSelector((state) => state.account);
  return (
    <div className="App">
      <h4>App</h4>
      {account.pending ? (
        <p>loading....</p>
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <h3>Current Amount : {amount} </h3>
      )}
      <h3>Total Bonus : {points}</h3>

      <Account/>
      <Bonus/>
    </div>
  );
}

export default App;
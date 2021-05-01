import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as api from './api/api';

import Coin from './components/Coin';

function App() {

  //creating hook to store coin data
  const[coin, setCoins] = useState([]);
  //creating hook to store error
  const[error, setError] = useState('');

  //store current_price

  

//run function to retrievce coins from api.
useEffect(() => {
  const interval = setInterval(() => { 
    api.retriveCoins().then(res =>{
    setCoins(res.data)
}).catch(error => setError(error))}, 15000);

return () => clearInterval(interval);
});


//loading data







  return (
    <div className="App">
        <h1>Gavins Crypto Tracker</h1>
        <Coin coins={coin} />
    </div>
  );
}

export default App;

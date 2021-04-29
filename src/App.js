import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as api from './api/api';

function App() {

  //creating hook to store coin data
  const[coin, setCoins] = useState(null);
  //creating hook to store error
  const[error, setError] = useState('');

//run function to retrievce coins from api.
useEffect(() => {
      api.retriveCoins().then(res =>{
        setCoins(res.data)
    }).catch(error => setError(error));
}, []);





  return (
    <div className="App">
        <h1>Gavins Crypto Tracker</h1>
    </div>
  );
}

export default App;

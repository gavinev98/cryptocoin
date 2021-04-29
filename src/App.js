import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

//run function on load.

useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false').
  then(response => {
    console.log(response.data);
  }).catch(error => console.log(error));
}, []);





  return (
    <div className="App">
 
    </div>
  );
}

export default App;

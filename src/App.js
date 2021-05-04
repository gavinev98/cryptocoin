import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as api from './api/api';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Coin from './components/CoinStuff/Coin/Coin';
import CoinOverview from './components/CoinStuff/CoinSummary/CoinOverview';
import Loading from './components/Loading/Loading';

function App() {

  //creating hook to store coin data
  const[coin, setCoins] = useState([]);
  //creating hook to store error
  const[error, setError] = useState('');


  

//run function to retrievce coins from api.
useEffect(() => {
  const interval = setInterval(() => { 
    api.retriveCoins().then(res =>{
    setCoins(res.data)
}).catch(error => setError(error))}, 15000);

return () => clearInterval(interval);
});

console.log(coin)

//loading data
  return (
    <div className="App">
        <Typography>Crypto Coin</Typography>
        {coin.length != 0
        ?   
        coin.map(items => (
        <Grid key={items.symbol} item xs={4}>
        <Coin key={items.symbol} items={items}  /> 
        </Grid> 
        ))
        :
       <Loading/>
      }
    </div>
  );
}

export default App;

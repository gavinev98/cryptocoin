import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as api from './api/api';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Coin from './components/CoinStuff/Coin/Coin';
import CoinOverview from './components/CoinStuff/CoinSummary/CoinOverview';
import Loading from './components/Loading/Loading';
import Navbar from './components/UI/Navbar';
import CoinTable from './components/CoinStuff/CoinTable/CoinTable';
import ItemsCarousel from './components/ItemsCarousel/ItemList';



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
        <Navbar />
        <Typography variant="h2" component="h2" gutterBottom>
        A look at todays market
        </Typography>
        <ItemsCarousel>
        {coin.length != 0
        ?   
        coin.map(items => (
        <Grid key={items.symbol} item xs={12} spacing={3}>
        <Coin key={items.symbol} items={items}  /> 
        </Grid> 
        ))
        :
       <Loading/>
      }
   
      </ItemsCarousel>
      <Typography style={{marginTop: '5%'}} variant="h2" component="h2" gutterBottom>
        Cryptos by comparison...
        </Typography>
      <CoinTable coins={coin} />
     
    </div>
  );
}

export default App;

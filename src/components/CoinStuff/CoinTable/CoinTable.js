import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loading from '../../Loading/Loading';
import Avatar from  '@material-ui/core/avatar';


const useStyles = makeStyles({
  table: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tableHeader: { 
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

function createData(coin, currentPrice, price_change_24, market_cap, market_cap_change_24hr, total_volume, circulating_supply, all_time_high, all_time_high_date, max_supply ) {
  return { coin, currentPrice, price_change_24, market_cap, market_cap_change_24hr, total_volume, circulating_supply, all_time_high, all_time_high_date, max_supply };
}

    //captitalize first letter
const capitalizeLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export default function BasicTable({ coins }) {
  
  const classes = useStyles();

  //set default to loading screen.
  const returnTable = <Loading />;

  return (     
      <div>
    {coins.length != 0 ?
        <TableContainer component={Paper}>
         <Table className={classes.table} aria-label="simple table">
           <TableHead className={classes.tableHeader}>
             <TableRow>
               <TableCell style={{fontWeight: "bold"}}>Coin</TableCell>
               <TableCell style={{fontWeight: "bold"}}  align="right">Current Price</TableCell>
               <TableCell style={{fontWeight: "bold"}} align="right">Price Change 24hr</TableCell>
               <TableCell style={{fontWeight: "bold"}} align="right">Market Cap</TableCell>
               <TableCell style={{fontWeight: "bold"}} align="right">Market Cap Change 24hr</TableCell>
               <TableCell style={{fontWeight: "bold"}} align="right">Total Volume</TableCell>
               <TableCell style={{fontWeight: "bold"}} align="right">Circulating Supply</TableCell>
               <TableCell style={{fontWeight: "bold"}} align="right">All Time High</TableCell>
               <TableCell style={{fontWeight: "bold"}} align="right">All Time High Date</TableCell>
               <TableCell style={{fontWeight: "bold"}} align="right">Max Supply</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {coins.map((coinData) => (
               <TableRow  key={coinData.id}>
                 <TableCell style={{fontWeight: "bold"}}   component="th" scope="row">
                 <Avatar alt="coin-symbol" src={coinData.image} />{capitalizeLetter(coinData.id)}
                 </TableCell>
                 <TableCell align="right">{coinData.current_price}</TableCell>
                 <TableCell style={coinData.price_change_percentage_24h > 0 ? { color : 'green'} : {color : 'red'}} align="right">{coinData.price_change_percentage_24h + `%`}</TableCell>
                 <TableCell align="right">{coinData.market_cap}</TableCell>
                 <TableCell align="right">{coinData.market_cap_change_24hr}</TableCell>
                 <TableCell align="right">{coinData.total_volume}</TableCell>
                 <TableCell align="right">{coinData.circulating_supply}</TableCell>
                 <TableCell align="right">{coinData.ath}</TableCell>
                 <TableCell align="right">{coinData.ath_date}</TableCell>
                 <TableCell align="right">{coinData.max_supply}</TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer> : 
         <Loading />
         }
  );
  </div>
  )};



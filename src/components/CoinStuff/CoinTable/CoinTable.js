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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
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
           <TableHead>
             <TableRow>
               <TableCell>Coin</TableCell>
               <TableCell  align="right">Current Price</TableCell>
               <TableCell align="right">Price Change 24hr</TableCell>
               <TableCell align="right">Market Cap</TableCell>
               <TableCell align="right">Market Cap Change 24hr</TableCell>
               <TableCell align="right">Total Volume</TableCell>
               <TableCell align="right">Circulating Supply</TableCell>
               <TableCell align="right">All Time High</TableCell>
               <TableCell align="right">All Time High Date</TableCell>
               <TableCell align="right">Max Supply</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {coins.map((coinData) => (
               <TableRow key={coinData.id}>
                 <TableCell   component="th" scope="row">
                   {capitalizeLetter(coinData.id)}
                 </TableCell>
                 <TableCell align="right">{coinData.current_price}</TableCell>
                 <TableCell align="right">{coinData.price_change_percentage_24h + `%`}</TableCell>
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



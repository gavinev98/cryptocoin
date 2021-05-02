import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Expand from '../../CustomButtons/Expand';
import Grid from '@material-ui/core/Grid';


import useStyles from './styles';


const Coin = ({ coins }) => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}></span>;

    //captitalize first letter
    const capitalizeLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    console.log(coins);

    
    return (
      <Grid container spacing={3}>
      {coins.map(items => (
        <Grid item xs={4}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={items.image}
            title="crypto-currency"
            width="200px"
            height="200px"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <h1 className="crypto-name">{capitalizeLetter(items.id)}</h1> 
              <h2 className="crypto-symbol">{items.symbol}</h2>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>Current Price: €{items.current_price}</p>
              <Typography display="inline">24HR </Typography>
             <Typography display="inline" style={items.price_change_percentage_24h > 0 ? { color : 'green'} : { color : 'red'}}> {items.price_change_percentage_24h} %</Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className={classes.divCenter}>
           <Expand   />
           </div>
        </CardActions>
      </Card>
      </Grid>
  ))}
  </Grid>
  );
 
};

export default Coin;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './CoinView';
import { Modal, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const CoinOverview = () => {

    const classes = useStyles();

    return (

      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
     
        </Typography>
        <Typography variant="h5" component="h2">
         Second Test
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Third Test
        </Typography>
        <Typography variant="body2" component="p">
         Fourth Test
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    );
};

export default CoinOverview;
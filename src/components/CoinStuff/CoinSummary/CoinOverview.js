import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './CoinView';
import { Modal, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import CoinOverviewCharts from '../CoinSummary/CoinOverviewCharts';
import ListItem from '../CoinSummary/ListItem';


const CoinOverview = ({ selectedCoin }) => {
    
  const classes = useStyles();

  
    return (

      <Card  className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {selectedCoin.name}
        </Typography>
          <CoinOverviewCharts selectedCoin={selectedCoin} />
          <ListItem selectedCoin={selectedCoin} />
      </CardContent>
      <CardActions>
        <Button size="small">Close</Button>
      </CardActions>
    </Card>
    );
};


export default CoinOverview;
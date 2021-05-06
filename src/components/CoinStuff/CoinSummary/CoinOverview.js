import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './CoinView';
import { Modal, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Chart} from 'chart.js'
import CoinOverviewCharts from '../CoinSummary/CoinOverviewCharts';


const CoinOverview = ({ selectedCoin }) => {
    
  const classes = useStyles();

    useEffect(() => {
    CoinOverviewCharts.chartJS();
    });


    return (

      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {selectedCoin.name}
        </Typography>
   
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    );
};


export default CoinOverview;
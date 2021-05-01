import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './CoinView';


const CoinOverview = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={4}>
          {props.children}
        </Grid>
        </Grid>
        </div>
    );
};

export default CoinOverview;
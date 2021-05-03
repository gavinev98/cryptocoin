import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './CoinView';
import { Modal } from '@material-ui/core';


const CoinOverview = (props) => {

    const classes = useStyles();

    return (
      <Modal
      
      aria-labelledby="crypto-details"
      aria-describedby="crypto-description">
      
      </Modal>
    );
};

export default CoinOverview;
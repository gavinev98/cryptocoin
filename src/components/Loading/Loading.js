import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Loading = () => {

    const classes = useStyles();

    return (
      <div className={classes.root}>
      <CircularProgress color="secondary" />
      <Typography variant="h1">Loading Cryptos please wait!</Typography>
    </div>
    );
};

export default Loading;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList({selectedCoin}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          {selectedCoin.price_change_24h > 0 ? <TrendingUpIcon style={{ color: 'green' }}/> : <TrendingDownIcon color="action" />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`€`+ selectedCoin.price_change_24h} secondary="Price change in the last 24 hours." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
           <TrendingDownIcon color="primary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`€`+ selectedCoin.low_24h} secondary="Lowest price in the past 24 hours." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <StarIcon color="secondary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`€`+selectedCoin.ath} secondary="ATH" />
      </ListItem>
    </List>
  );
}

import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" >
                Crypto Coin
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;


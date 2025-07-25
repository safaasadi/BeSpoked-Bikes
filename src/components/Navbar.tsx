import React from 'react';
import {AppBar, Toolbar, Typography, Button, Box, IconButton} from '@mui/material';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import {useNavigate} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar className="navbar-toolbar">
                <Typography className="navbar-title">
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <PedalBikeIcon />
                </IconButton>
                    BeSpoked Bikes
                </Typography>
                <Box className="navbar-box">
                    <Button color="inherit" onClick={() => navigate('/')}>Products</Button>
                    <Button color="inherit" onClick={() => navigate('/salesperson')}>Salesperson</Button>
                    <Button color="inherit" onClick={() => navigate('/customers')}>Customers</Button>
                    <Button color="inherit" onClick={() => navigate('/sales')}>Sales</Button>
                    <Button color="inherit" onClick={() => navigate('/create-sale')}>Create Sale</Button>
                    <Button color="inherit" onClick={() => navigate('/commission-report')}>Quarterly Report</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
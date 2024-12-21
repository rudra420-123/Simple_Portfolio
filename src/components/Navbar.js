import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1d1d1d' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#e0e0e0' }}>
          Rudra's Portfolio
        </Typography>
        <Button sx={{ color: '#90caf9' }} component={Link} to="/Simple_Portfolio">
          Home
        </Button>             
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

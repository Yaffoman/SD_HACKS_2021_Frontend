import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import useAuth from '../Auth/Auth';
import styles from './Navbar.module.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function ProfileMenu() {
  const [anchor, setAnchor] = useState(null);
  const { setUser } = useAuth();

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <AccountCircle />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><RouterLink to='/profile'>Profile</RouterLink></MenuItem>
        <MenuItem onClick={(event) => {
          setUser(null);
          handleClose(event);
        }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default function Navbar() {
  const { user } = useAuth();

  return (
    <AppBar position="sticky" color={"primary"}>
      <Toolbar className={styles.toolbar}>
        <Link component={RouterLink} to='/' color="inherit">Home</Link>
        {user
          ? <ProfileMenu />
          : <Link component={RouterLink} to='/login' color="inherit">Login</Link>
        }
      </Toolbar>
    </AppBar>
  )
}
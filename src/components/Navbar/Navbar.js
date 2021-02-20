import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useAuth from '../Auth/Auth';

export default function Navbar() {
  const user = useAuth();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link></Link>
        <Typography variant="h6">
          News
        </Typography>
        {user ? <IconButton><AccountCircle /></IconButton> : <Button color="inherit">Login</Button>}
      </Toolbar>
    </AppBar>
  )
}
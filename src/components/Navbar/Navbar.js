import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import useAuth from "../Auth/Auth";
import styles from "./Navbar.module.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Progress from "../Progress/Progress";

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
        <MenuItem onClick={handleClose}>
          <RouterLink to="/profile">Profile</RouterLink>
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            setUser(null);
            handleClose(event);
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

function LoggedIn() {
  return (
    <>
      <div className={styles.leftAligned}>
        <Link component={RouterLink} to="/" color="inherit" className={styles.navbarItem}>
          Dashboard
        </Link>
        <Link component={RouterLink} to="/Global" color="inherit">
          Global
        </Link>
        <Link component={RouterLink} to="/Friends" color="inherit">
          Friends
        </Link>
      </div>

      <div className={styles.rightAligned}>
        <Grid item>
          <Progress percentage={60} />
        </Grid>
        <ProfileMenu />
      </div>
    </>
  );
}

function NotLoggedIn() {
  return (
    <>
      <Link
        component={RouterLink}
        className={styles.rightAligned}
        to="/login"
        color="inherit"
      >
        Login
      </Link>
    </>
  );
}

export default function Navbar() {
  const { user } = useAuth();

  return (
    <AppBar position="sticky" color={"primary"}>
      <Toolbar className={styles.toolbar}>
        {user ? <LoggedIn /> : <NotLoggedIn />}
      </Toolbar>
    </AppBar>
  );

  // return (
  //   <AppBar position="sticky" color={"primary"}>
  //     <Toolbar className={styles.toolbar}>
  //       <Link component={RouterLink} to='/' color="inherit">Dashboard</Link>
  //       {user
  //         ? <ProfileMenu />
  //         // TODO maybe user instead: ? <Button color="inherit" onClick={() => setUser(null)}>Logout</Button>
  //         : <Link component={RouterLink} to='/login' color="inherit">Login</Link>
  //       }
  //     </Toolbar>
  //   </AppBar>
  // )
}

import React from 'react';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Landing from './pages/Landing/Landing';
import Update from './pages/Update/Update'
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { Auth } from './components/Auth/Auth';
import Theme from './components/Theme/Theme';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/landing' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/update' component={Update} />
        <PrivateRoute path='/' component={Dashboard} />
      </Switch>
    </Router>
  )
}

function App() {
  return (
    <div className={styles.App}>
      <Auth>
        <Theme>
          <Routes />
        </Theme>
      </Auth>
    </div>
  );
}

export default App;

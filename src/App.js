import React from 'react';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { Auth } from './components/Auth/Auth';

function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/landing' component={Landing} />
        <Route exact path='/profile' component={Profile} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}

function App() {
  return (
    <div className={styles.App}>
      <Auth>
        <Routes />
      </Auth>
    </div>
  );
}

export default App;

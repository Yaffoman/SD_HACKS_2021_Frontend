import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';

function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='./' component={Home} />
      </Switch>
    </Router>
  )
}

function App() {
  return (
    <div className={styles.App}>
      <Routes />
    </div>
  );
}

export default App;

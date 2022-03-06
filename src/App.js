import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><LandingPage/></Route>
        <Route exact path='/home'><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;

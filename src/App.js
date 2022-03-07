import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CharacterDetail from "./components/CharacterDetail/CharacterDetil";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <Link to='/home'> Rick y Morty </Link>
      <Switch>
        <Route exact path='/'><LandingPage/></Route>
        <Route path='/home'><Home/></Route>
        <Route exact path='/character_detail/:id'><CharacterDetail/></Route>
      </Switch>
    </Router>
  );
}

export default App;

import './app.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddToLink from './Components/AddToLink/AddToLink';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/addToLink">
          <AddToLink/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}



export default App;

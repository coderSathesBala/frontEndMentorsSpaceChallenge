import logo from './logo.svg';
import './App.css';
import Landing from './components/landingPage.js'
import Navbar from './components/navbar.js'
import Technology from './components/technologyPage.js'
import Crew from './components/crewPage.js'
import Destination from './components/destinationPage.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
    <Navbar/>
        <Switch>
            <Route path="/">
                <Landing/>
            </Route>
            
            <Route path="/Crew">
                <Crew/>
            </Route>

            <Route path="/Destination">
                <Destination/>
            </Route>

            <Route path="/Technology">
                <Technology/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
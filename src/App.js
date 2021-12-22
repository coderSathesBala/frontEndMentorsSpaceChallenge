import logo from './logo.svg';
import './App.css';
import Landing from './components/landingPage.js'
import Navbar from './components/navbar.js'
import Technology from './components/technologyPage.js'
import Crew from './components/crewPage.js'
import Destination from './components/destinationPage.js'

function App() {
  return (
    <div>
    <Navbar/>
    <Landing/>
    <Crew/>
    <Destination/>
    <Technology/>
    </div>
  );
}

export default App;
import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import Portfolio from './Portfolio'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;

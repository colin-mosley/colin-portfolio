import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <About />
    </div>
  );
}

export default App;

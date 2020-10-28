import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import Skills from './Skills'
import Portfolio from './Portfolio'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      {/* <About />
      <Skills /> */}
      <Portfolio />
    </div>
  );
}

export default App;

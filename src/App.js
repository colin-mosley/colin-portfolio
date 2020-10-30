import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import Portfolio from './Portfolio'
import Contact from './Contact'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

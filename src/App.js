import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import Portfolio from './Portfolio'
import Contact from './Contact'
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'

function App() {
  return (
    <div id="App" className="App">
      <Home />
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

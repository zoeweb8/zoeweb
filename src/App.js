import './App.css';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import About from "./Components/About";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>

      <ul className="navbar">
          <Link to="home" smooth={false} className="logo">Zoe DeTrani</Link>
        <ul>
          <Link to="home" smooth={true} className="btn">Home</Link>
          <Link to="about" smooth={true} className="btn">About</Link>
          <Link to="blog" smooth={true} className="btn">Blog</Link>
          <Link to="contact" smooth={true} className="btn">Contact</Link>
          <a className="mobileIcon" href="https://github.com/zotrani"><FaGithub /></a>
          <a className="mobileIcon" href="https://www.linkedin.com/in/ztrani"><FaLinkedin /></a>
        </ul>
      </ul>

      <Home/>
      <About/>
      <Blog/>
      <Contact/>


    </div>

  );
}

export default App;

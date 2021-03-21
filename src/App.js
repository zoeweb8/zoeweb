import '.list.svg';
import './App.css';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaChevronCircleDown} from 'react-icons/fa';
import { Fade, Bounce , Zoom} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import ContactForm from './ContactForm';

function App() {
  return (
    <div>

      <ul class="navbar">
          <Link to="home" smooth={false} class="logo">Zoe DeTrani</Link>
        <ul>
          <Link to="home" smooth={true} class="btn">Home</Link>
          <Link to="about" smooth={true} class="btn">About</Link>
          <Link to="blog" smooth={true} class="btn">Blog</Link>
          <Link to="contact" smooth={true} class="btn">Contact</Link>
          <a class="mobileIcon" href="https://github.com/zotrani"><FaGithub /></a>
          <a class="mobileIcon" href="https://www.linkedin.com/in/ztrani"><FaLinkedin /></a>
        </ul>
      </ul>
    <div class="home">
      <div class="container">
        <Zoom><img src="https://i.ibb.co/CHgTwsT/zoe-Overlay.png" height="auto" width="270px" max-width="50%"></img></Zoom >
      </div>
      <div class="container">
        <ReactTypingEffect
          text={["'Hello! My name is Zoe. Welcome to my page!'",
          "'I'm studying computer engineering at RIT.","'My favorite hobby is art (photography, drawing)!'","'Scroll down to learn more about me!'",
          "'Have a lovely day! Thanks for visiting! <3'"]}
          speed={70}
          style={{
           fontFamily: 'TypeWriter',
           color: 'white',
           fontWeight: 500,
           fontSize: '20px',

          }}
          eraseSpeed={60}
          eraseDelay={700}
          staticText={["ZOE : "]}/>

          <div class="arrow" >
             <Link to="about" smooth={true} >  <a><FaChevronCircleDown /></a></Link>
          </div>
        </div>

       </div>


      <div class="about">
        <Bounce delay={100}>
              <p>About</p>
              <img src="https://i.ibb.co/7Q3vdVC/zoe.jpg" alt="zoe" height="200px" width="200px" ></img>
        </Bounce>
        <a class="edu">
            <h1>Education </h1>
               <Bounce delay={300}>
                <li>Rochester Institute of Technology</li>
                <li>Bachelors of Science - Computer Engineering</li>
                <li>Expected Graduation: May 2023</li>
            </Bounce>
            <h1>Key Skills </h1>
                <Bounce delay={400}>
                  <h2>Programming Skills:</h2>
                    <li> C, Java, Python 3.7</li>
                    <li> PowerShell, JSON </li>
                    <li> HTML, JavaScript, CSS</li>
                  <h2>Software Tools:</h2>
                    <li>GitHub, Git Bash, Linux</li>
                    <li>Visual Studio Code, IntelliJ</li>
                    <li> Atom, PyCharm, IDLE</li>
                </Bounce>
                <div class="row">
                  <a class="hobbyIcon" href="https://github.com/zotrani"><FaGithub /></a>
                  <a class="hobbyIcon" href="https://www.linkedin.com/in/ztrani"><FaLinkedin /></a>
                </div>
          </a>
      </div>

      <div class="blog">
        <h1>3</h1>
      </div>
      <div class="contact">
        <p> Let's Be Friends!</p>
          <div class="container">
            <ContactForm/>
          </div>
          <footer>
            Designed and Coded by Zoe with ♡ 2021
        </footer>

      </div>
    </div>

  );
}

export default App;

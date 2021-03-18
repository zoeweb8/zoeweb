import '.list.svg';
import './App.css';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaCameraRetro, FaRunning,FaMountain,FaPaintBrush} from 'react-icons/fa';
import { Fade, Bounce } from "react-awesome-reveal";
import TypeWriterEffect from 'react-typewriter-effect';

function App() {
  return (
    <div>
      <ul class="navbar">
        <div class="logo">Zoe DeTrani</div>
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

        <TypeWriterEffect
           textStyle={{
             fontFamily: 'TypeWriter',
             color: 'white',
             fontWeight: 500,
             fontSize: '50px',
           }}
           startDelay={500}
           cursorColor="white"
           multiText={[
             'Hi, my name is Zoe.',
             'Welcome to my page! :)',
             'I currently study computer engineering, but I love coding as well!',
             'Scroll to learn more about me!',
             'Have a lovely day! <3',
           ]}
           loop={true}
           nextTextDelay={1000}
           typeSpeed={20}
         />
      </div>
      <div class="about">
        <Bounce delay={200}>
              <p>About</p>
        </Bounce>
        <img src="https://i.ibb.co/7Q3vdVC/zoe.jpg" alt="zoe"></img>
        <a class="edu">
            <h1>Education </h1>
                <li>Rochester Institute of Technology</li>
                <li>Bachelors of Science: Computer Engineering</li>
                <li>Expected Graduation: May 2023</li>
            <h1>Key Skills </h1>
                <div class="bullets"><h2>Programming Languages:</h2> C, Java, Python 3.7, CSS, HTML, JavaScript, JSON, PowerShell </div>
                <div class="bullets"><h2>Software Tools:</h2> GitHub, Git Bash, Linux, PyCharm, Visual Studio Code, IntelliJ, Atom, IDLE</div>
          </a>
          <h3> Hobbies</h3>
          <h3>
            <li class="hobbyIcon"><FaCameraRetro /></li>
            <li class="hobbyIcon"><FaRunning /></li>
            <li class="hobbyIcon"><FaMountain /></li>
            <li class="hobbyIcon"><FaPaintBrush /></li>
            </h3>


      </div>
      <div class="blog">
        <h1>3</h1>
      </div>
      <div class="contact">
        <h1>4</h1>
      </div>
    </div>

  );
}

export default App;

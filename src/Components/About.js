import React from 'react';
import { Bounce } from "react-awesome-reveal";

class About extends React.Component{
  render(){
    return(
      <div className="about">
        <Bounce>
              <p>About</p>
              <img src="https://i.ibb.co/7Q3vdVC/zoe.jpg" alt="zoe" height="200px" width="200px" ></img>
        </Bounce>
        <div className="edu">
            <h1>Education </h1>
               <Bounce>
                <li>Rochester Institute of Technology</li>
                <li>Bachelors of Science - Computer Engineering</li>
                <li>Expected Graduation: May 2023</li>
            <h1>Key Skills </h1>
                  <h2>Programming Skills:</h2>
                    <li> C, Java, Python 3.7</li>
                    <li> PowerShell, JSON </li>
                    <li> HTML, JavaScript, CSS</li>
                  <h2>Software Tools:</h2>
                    <li>GitHub, Git Bash, Linux</li>
                    <li>Visual Studio Code, IntelliJ</li>
                    <li> Atom, PyCharm, IDLE</li>
                </Bounce>

          </div>
      </div>
    )
  }
}
export default About

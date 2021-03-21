import { FaChevronCircleDown } from 'react-icons/fa';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Zoom } from "react-awesome-reveal";
import { Link } from 'react-scroll';

class Home extends React.Component{
  render(){
    return(
      <div className="home">
        <Zoom>
        <div className="container">
          <img src="https://i.ibb.co/CHgTwsT/zoe-Overlay.png" height="auto" width="270px" max-width="50%" alt="HomeZoe"></img>
        </div>
        </Zoom>
        <div className="container">
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

            <div className="arrow" >
               <Link to="about" > <FaChevronCircleDown /></Link>
            </div>
          </div>

         </div>

    )
  }
}
export default Home

import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Contact extends React.Component{
  render(){
    return(
      <div className="contact">
        <p> Let's Be Friends!</p>
          <div className="container">
            <a className="hobbyIcon" href="https://github.com/zotrani"><FaGithub /></a>
            <a className="hobbyIcon" href="https://www.linkedin.com/in/ztrani"><FaLinkedin /></a>
            <Popup trigger={<button className="hobbyIcon"> <FaMailBulk/></button>} position="right center">
               <div> Questions? Comments? You can email me at: zoeweb8@gmail.com</div>
             </Popup>
          </div>


          <footer>
            Designed and Coded by Zoe with ♡ 2021
        </footer>

      </div>
    )
  }
}
export default Contact

import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer className="footer">
      
      <div className='footer-social'>
        <a href="https://github.com/Meera-Mohanan" className="github social mobile-foot"><i><FontAwesomeIcon icon={faGithub} size="2x" /></i></a>
        <a href="https://www.linkedin.com/in/meera-mohanan-1692295/" className="linkedin social mobile-foot"><i><FontAwesomeIcon icon={faLinkedin} size="2x" /></i></a>
      </div>
    </footer>
  );
}

export default Footer;
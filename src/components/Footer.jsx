import React from "react";
// import PropTypes from "prop-types";
import "../App.css";
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faAddressBook, faEnvelope, faClipboard, faBell, faFile} from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FaBars, FaSearch, FaMicrophone, FaVideo, FaEllipsisV, faGithub,FaUserCircle } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons'
import { FiMapPin } from 'react-icons/fi'


const Footer = () => {
    return (
        <footer>
            <div style={{fontStyle:"italic"}}><p> YOUR ONE STOP ANALYTIC SOLUTIONS</p>
            </div>

            <div className="Footertwo" style={{ display: "flex", justifyContent:"space-between", width:"100%",textAlign:"center"}}>
                <div style={{fontStyle:"italic"}}> <FiMapPin size={40} color="red" />&nbsp;<span>Visit us in our store and locaion</span></div>
                <div><SocialIcon url="https://mail.google.com" />vkampah28@gmail.com<a href="#top" style={{textDecoration:"none", color:"white"}}>Go to Top</a></div>
                <div><p>PROJECTS AND PROFILE</p>
                <SocialIcon  label="my video channel" network= "linkedin" url="https://www.linkedin.com/in/valentine-ampah-b92a0198" target="_blank" />
                &nbsp;<span><a href="www.linkedin.com/in/valentine-ampah-b92a0198" target="_blank" style={{textDecoration:"none", color:"white"}}>LinkedIn</a></span>
                    &nbsp;&nbsp;<SocialIcon network = "github" url="https://github.com/VK-Ampah/IntroToWebDev" target="_blank" bgColor="white" fgColor="black" />
                    &nbsp;<span><a href="www.linkedin.com/in/valentine-ampah-b92a0198" target="_blank" style={{textDecoration:"none", color:"white"}}>GitHub</a></span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

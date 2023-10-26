import React from "react";
// import PropTypes from "prop-types";
// import logo from "../logo.svg"; // Tell Webpack this JS file uses this image
import "../App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faAddressBook, faEnvelope, faClipboard, faBell, faFile } from '@fortawesome/free-solid-svg-icons';
import Buttons from "./Buttons";
import { FaBars,FaMicrophone } from 'react-icons/fa';
// import TranslateToSound from "./Texttospeech";
import SignInIcon from "./signinicon";

function Header() {
  // implement a function to translate text to speech

    return (
      
      <> 
        <header  id = "sticky-header" style={{ display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"100%", height: "100px", textAlign:"center", backgroundColor: "#0B2944", color:"white"}}>
          <div style={{ width:"30%",display:"flex", backgroundColor: "#023058", color:"white",alignItems:"center"}} >         
            <div id="menu" style={{position:"absolute", left:"5%"}}> 
                <span className="material-icons" style={{ fontSize: "1.2rem" }}><div id="Menu" >
                  <FaBars style={{fontSize:"30px"}}/>
                  </div> 
                 </span>
            </div>
                 
            </div>
          <div style={{ width:"30%", textAlign:"center", color:"white" }}>

                <div id="search-wrapper" style={{display:"flex", flexDirection:"row"}}>
                        <input style={{ fontSize: "20px",width: "80%",borderRadius:"5px" }} type="text" placeholder="Enter your search term" />
                        <span ><Buttons ></Buttons></span>
                        <span > <FaMicrophone style={{fontSize:"20px", height:"100%",width:"100%"}}/> </span>
                      </div>
          </div>
          <div style={{ width:"30%",display:'flex', flexDirection:"row",justifyContent:"space-evenly", alignItems:"center",textAlign:"center", backgroundColor: "#023058", color:"white"}}>
          <div id="user-options" style={{position:"absolute", right:"1%"}}>
              <button style={{ fontSize: "15px",width: "100px",height:"100%"}}id="sign-in">
                <SignInIcon style={{fontSize:"30px"}} /> SIGN IN
              </button>
          </div>
          </div> 
        </header>
        </>
    );
}

export default Header;

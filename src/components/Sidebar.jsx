import React from 'react';
// import PropTypes from 'prop-types';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressBook, faEnvelope, faClipboard, faBell, faFile } from '@fortawesome/free-solid-svg-icons';


const Sidebar = (props) => {
    return (
        <>
     <div className="sidebar" style={{textAlign:"center", paddingLeft:5,marginRight:10}}>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faAddressBook} />
        <span>About</span>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Contacts</span>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faClipboard} />
        <span>Services</span>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faBell} />
        <span>Notifications</span>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faFile} />
        <span>Documents</span>
      </div>
    </div>
        </>
    );
};

Sidebar.propTypes = {
    // Define your PropTypes here
};

export default Sidebar;






import React from 'react';
import { FaBars } from 'react-icons/fa';

function menuico() {
    return (
        <div>
        <div id="menu" onClick={()=>(console.log('hey'))}>
        <FaBars />
      </div>
        </div>
    );
}

export default menuico;

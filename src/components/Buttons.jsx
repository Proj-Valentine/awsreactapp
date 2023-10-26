import React from 'react';
import "../App.css";
import { FaSearch} from 'react-icons/fa';

function Buttons() {
    return (
        <div>
            <button onClick={() => alert('Icon clicked!')}><FaSearch style={{ height:"100%",fontSize:"10px", color:"dimgrey",width:"100%"}}/></button>
        </div>
    );
}



export default Buttons;

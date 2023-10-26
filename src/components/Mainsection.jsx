import React from 'react';
// import PropTypes from 'prop-types';
import "../App.css";
import { Line, Bar } from 'react-chartjs-2';
// import { faComment, faComments, faEnvelope, faEnvelopeOpen, faPaperPlane, faInbox, faPaperclip, faThumbsUp, faThumbsDown, faReply, faShare, faEdit, faTrash, faArchive, faBell, faExclamation, faQuestion, faInfo } from '@fortawesome/free-solid-svg-icons';
// import Buttons from './Buttons';


const Mainsection = () => {    
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [12, 19, 3, 5, 2, 3, 7],
          fill: false,
          borderColor: '#08223c;', // Blue text color for the line graph
          backgroundColor: '#08223c',//'rgba(0, 123, 255, 0.2)', // Blue bar color with transparency
          borderWidth: 1,
        },
        {
          label: 'Dataset 2',
          data: [5, 2, 3, 12, 19, 3, 7],
          backgroundColor: 'rgba(0, 123, 255, 0.4)', // Lighter blue bar color with transparency
          borderColor: '#007bff', // Blue border color for the bars
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      scales: {
        x: {
          type: 'category',
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'black', // Black color for legend text
          },
        },
      },
    };


    return (
      <>
      <div className="Dashboard" style={{ display: "flex", flexDirection:"column", width:"100%", height:"100%",textAlign:"center", paddingLeft:5,marginLeft:5,color:'black',backgroundColor:'white'}}>
          <div className='Dash-desc' style={{display:"flex", flexDirection:"row", justifyContent:"space-between" ,width:"100%",backgroundColor:"#023058",height:"100%",paddingBottom:"5px", marginBottom:"10px",marginTop:"10px",color:'white', border:" 4px red solid" }}>
        
                  <div style={{ felx:1, width : "50%", borderRadius:"20px",border:" 4px white solid"  }}>
                        <h1> PROJECT DESCRIPTIONS</h1>
                        <p> INSERT TEXT HERE</p>  
                        <p> INSERT TEXT HERE</p> 
                        <p> INSERT TEXT HERE</p> 
                        <p> INSERT TEXT HERE</p> 
                        <p> INSERT TEXT HERE</p> 
                          
                        
                    </div>
            <div style={{flex: 1, width : "50%", borderRadius:"20px",border:" 4px white solid"}}> 
              <h1>TOOLS</h1>
                  <p> INSERT TEXT HERE</p> 
              
            </div>
        </div> 


        {/* //second flex column */}

        <div className='Dash-header' style={{backgroundColor:"#023058",height:"15%",paddingBottom:"5px", marginBottom:"10px",marginTop:"10px",color:'white' }}>
        <h1> SALES DASHBOARD FOR 2023</h1>
        </div>  
        {/* /// added from FIGMA and modified  to replace the code above*/}
        <div className="scorecard" style={{backgroundColor:"white" , display: "flex", flexDirection:"row", width:"100%",justifyContent:"space-evenly",height:"40%",paddingBottom:"5px", marginBottom:"10px", border: "1px solid red",}}>
    <div style={{width: "10%", height: "100%", background: '#023058', borderRadius: 40,color:"white"}}> <h1>80%</h1> <h2>Returns</h2></div>
    <div style={{width: "10%", height: "100%",  background: '#023058', borderRadius: 40,color:"white"}}><h1>60%</h1> <h2>NetIncome</h2></div>
    <div style={{width: "10%", height: "100%",  background: '#023058', borderRadius: 40,color:"white"}}><h1>75%</h1> <h2>Withdrawals</h2> </div>
      </div>


        <div className='Barchart' style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", height: "35%", backgroundColor: "#08223c", alignItems: "flex-end", border: "1px solid #007bff" }}>
          <div style={{ backgroundColor: "#ffffff", width: "50%", height: "100%", color: 'black', marginRight: "10px" }}>
            <Bar data={data} options={options} />
          </div>
          <div style={{ backgroundColor: "#ffffff", width: "50%", height: "100%", color: 'black', marginRight: "10px" }}>
            <Bar data={data} options={options} />
          </div>
          <div style={{ backgroundColor: "#ffffff", width: "35%", height: "100%", color: 'black', marginRight: "10px" }}>
            <Bar data={data} options={options} />
          </div>
        </div>

        <div className='Linegraph' style={{width:"100%",height:"30%",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <div style={{backgroundColor:"#ffffff",width:"100%" ,height:"100%", border:"solid"}}>
             <Line data={data} options={options} />
            </div>   
        </div>

      </div>
      </>
    );
  };




export default Mainsection;

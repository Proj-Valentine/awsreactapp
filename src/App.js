// import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Mainsection from './components/Mainsection';
// import Buttons from './components/Buttons';
// import icons from './components/icons';


function App() {
  return (
    <>

    <div className="App">
      <div className = "header">
        <Header/>
      </div > 
      <div className='sidemainbox'>
        <div className = "sidebar"><Sidebar/></div>
        <div className='mainsection'><Mainsection/></div>
      </div>
      <div className='Footer'><Footer/>
      </div>
      </div>

</>
  );
}

export default App;

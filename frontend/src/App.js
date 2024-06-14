import './App.css';
import MobileNavbar from './component/Navbar/MobileNavbar';
import Navbar from './component/Navbar/Navbar';
import Body from "./component/Body/Body"
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <MobileNavbar/>
       <Navbar/>
       <Body/>
      {/* </header> */}
    </div>
  );
}

export default App;

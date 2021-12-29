import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className=" w-full h-full font-serif ">
      
     
      <Routes>
          <Route exact path="/" element={<Login/>}/>

          <Route exact path="/home" element={<Home/>}/>
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;

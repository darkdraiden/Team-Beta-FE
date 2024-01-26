// import logo from './logo.svg';
import "./App.css";
import Login from "./Components/Login";
// import Signup from './Components/Signup'
import "bootstrap/dist/css/bootstrap.min.css";
// import Signup from './Component/Signup';
import Signup from "./Components/Signup";
import Nvbar from "./Components/Nvbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from './Pages/Landing';
import About from './Pages/About';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const[member,setMember]=useState('');
  // console.log(isAuthenticated);
  useEffect(()=>{
    if( sessionStorage.getItem("isLoggedIn")=="true"){
      setIsAuthenticated(true);
    }
    else{
      setIsAuthenticated(false);
    }
  },[])
  return (

    
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<Landing/>} ></Route>
        <Route exact path='/landing' element={<Landing/>} ></Route>
      <Route exact path='/About' element={<About/>} ></Route>
      </Routes>
      </Router>

      {(isAuthenticated===false)? (
        <div>
          {" "}
          <Router>
            <Routes>
              <Route exact path="/" element={<Login setIsAuthenticated={setIsAuthenticated} setMember={setMember}/>} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setMember={setMember}/>} />
            </Routes>
          </Router>
        </div>
      ) : (
        <div >
          <Nvbar  name={member.memberName}  setIsAuthenticated={setIsAuthenticated}/>
          <Home member={member}/>
        </div>
      )}
    </div>
  );
}

export default App;

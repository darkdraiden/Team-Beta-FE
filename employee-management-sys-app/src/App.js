// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Signup from './Component/Signup';
import Nvbar from './Components/Nvbar';
import Home from './Components/Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
       <Routes>
      
      <Route path='/login' element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
    </Routes>
    </Router>

    <Nvbar/>
<Home/>
    </div>
  );
}

export default App;

import React from 'react'
import Sidebar from './Sidebbar'
import Dash from './Dash'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import { Profile } from '../Pages/Profile';
import ManageTeam from '../Pages/ManageTeam';
import Salary from '../Pages/Salary';
import Leaves from '../Pages/Leaves';
import OtherTeams from '../Pages/OtherTeams';
import Profile from '../Pages/Profile';

const Home = () => {
  return (
    <div>
        <Router>
            <Sidebar/>
            <Routes>
                <Route exact path='/' element={<Dash/>} ></Route>
                <Route exact path='/profile' element={<Profile/>} ></Route>
                <Route  exact path='/manageteam' element={<ManageTeam/>} ></Route>
                <Route exact path='/salary' element={<Salary/>} ></Route>
                <Route exact path='/leaves' element={<Leaves/>} ></Route>
                <Route exact path='/otherteam' element={<OtherTeams/>} ></Route>

            </Routes>
        </Router>
    </div>
  )
}

export default Home;

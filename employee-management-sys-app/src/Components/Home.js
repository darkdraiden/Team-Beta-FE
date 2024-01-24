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
import EditProfile from '../Pages/EditProfile';

const Home = ({member}) => {
  return (
    <div>
        <Router>
            <Sidebar/>
            <Routes>
                <Route exact path='/' element={<Dash/>} ></Route>
                <Route exact path='/profile' element={<Profile member={member}/>} ></Route>
                <Route  exact path='/manageteam' element={<ManageTeam/>} ></Route>
                <Route exact path='/salary' element={<Salary member={member}/> } ></Route>
                <Route exact path='/leaves' element={<Leaves member={member}/>} ></Route>
                {/* <Route exact path='/otherteam' element={<OtherTeams/>} ></Route> */}
                <Route exact path='/update' element={<EditProfile member={member} />}></Route>

            </Routes>
        </Router>
    </div>
  )
}

export default Home;

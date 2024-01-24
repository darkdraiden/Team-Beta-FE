import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBill, faLeaf } from '@fortawesome/free-solid-svg-icons';
import './Sidebbar.css';

const Sidebar = () => {
  return (
    <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0 sidebbar-container" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef", height: "100vh" }}>
      <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li className="nav-item mb-2 mt-3">
          <a className="nav-link text-secondary" href="#"><h5>Dashboard</h5></a>
        </li>
        <li className="nav-item mb-2">
          <Link to="/profile" className="nav-link text-secondary d-flex align-items-center" activeClassName="active">
            <FontAwesomeIcon icon={faUser} className="font-weight-bold mr-2" />
            <span className="ml-3">Profile</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/salary" className="nav-link text-secondary d-flex align-items-center" activeClassName="active">
            <FontAwesomeIcon icon={faMoneyBill} className="font-weight-bold mr-2" />
            <span className="ml-3">Salary</span>
          </Link>
        </li>
        {/* <li className="nav-item mb-2">
          <Link to="/manageteam" className="nav-link text-secondary d-flex align-items-center" activeClassName="active">
            <FontAwesomeIcon icon={faUser} className="font-weight-bold mr-2" />
            <span className="ml-3">ManageTeam</span>
          </Link>
        </li> */}
        <li className="nav-item mb-2">
          <Link to="/leaves" className="nav-link text-secondary d-flex align-items-center" activeClassName="active">
            <FontAwesomeIcon icon={faLeaf} className="font-weight-bold mr-2" />
            <span className="ml-3">Leaves</span>
          </Link>
        </li>
        {/* <li className="nav-item mb-2">
          <Link to="/otherteam" className="nav-link text-secondary d-flex align-items-center" activeClassName="active">
            <FontAwesomeIcon icon={faUser} className="font-weight-bold mr-2" />
            <span className="ml-3">Other Teams</span>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;


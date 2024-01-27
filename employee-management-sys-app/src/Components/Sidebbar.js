import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBill, faLeaf, faEdit, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './Sidebbar.css';

const Sidebar = () => {
 
  return (
    <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0 sidebbar-container" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef", height: "100vh" }}>
      <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
       
      <li className="nav-item mb-2 ">
          <Link to="/" className="nav-link text-dark d-flex align-items-center" activeClassName="active">
            <FontAwesomeIcon icon={faChartBar} className="font-weight-bold mr-2" />
            <span className="ml-3">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/profile" className="nav-link text-dark d-flex align-items-center" activeClassName="active">
            <FontAwesomeIcon icon={faUser} className="font-weight-bold mr-2" />
            <span className="ml-3">Profile</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/salary" className="nav-link text-dark d-flex align-items-center" activeClassName="active">
            <FontAwesomeIcon icon={faMoneyBill} className="font-weight-bold mr-2" />
            <span className="ml-3">Salary</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/leaves" className="nav-link text-dark d-flex align-items-center" activeClassName="active">
            <FontAwesomeIcon icon={faLeaf} className="font-weight-bold mr-2" />
            <span className="ml-3">Leaves</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/update" className="nav-link text-dark d-flex align-items-center" activeClassName="active">
            <FontAwesomeIcon icon={faEdit} className="font-weight-bold mr-2" />
            <span className="ml-3">Update Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;






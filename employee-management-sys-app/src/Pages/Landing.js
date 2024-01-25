import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import home_pic from '../images/home_pic.png';
import aboutt from '../images/aboutt.gif';
import '../Css/HomeStyle.css';

const Landing = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav>
            <div className="List">
              <NavLink  to="/landing" className="listName" activeClassName="activeItem">
                Home
              </NavLink>
              <NavLink  to="/About" className="listName" activeClassName="activeItem">
                About
              </NavLink>

              <NavLink  to="/login" className="listName" activeClassName="activeItem">
                Login
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <div className="mainSection">
        <div className="contentBox">
          <h1>Know More About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing eliter fjsvfhdjf cjszcvdh
           
          </p>
          <div classname="btnBox">
            <div className="btn">
              <NavLink to="/About" className="readMore">
                Read More
              </NavLink>
            </div>
          </div> 
        </div>
        <div className="imgContainer">
          <img src={aboutt} alt="home" />
        </div>
        {/* <div className="container container-flex"> */}
        <footer>
          <div class="copyright">
              <p>All rights reserved &copy;</p>
          </div>
        </footer>
        
        {/* </div> */}
      </div>
    </>
  );
};

export default Landing;
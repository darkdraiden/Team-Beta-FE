import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import home_pic from '../images/home_pic.png';
import '../Css/HomeStyle.css';

const About = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
            <h2>EmploEase</h2>
          </div>
          <nav>
            <div className="List">
              <NavLink exact to="/landing" className="listName" activeClassName="activeItem">
                Home
              </NavLink>
              <NavLink exact to="/About" className="listName" activeClassName="activeItem">
                About
              </NavLink>

              <NavLink to="/login" className="listName" activeClassName="activeItem">
                Login
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <div className="mainSection">
        <div className="contentBox">
          {/* <h1>Know More About Us</h1> */}
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id auctor magna, pellentesque tempus tellus. CAenean sagittis non dui et dictum.
          </p>
          <p>
          Maecenas nec purus augue.Quisque scelerisque nec nunc at elementum, lacinia vitae tortor. Vivamus fringilla est eu massa vulputate, id vestibulum quam venenatis. 
          </p>
          {/* <div classname="btnBox">
            <div className="btn">
              <NavLink to="/About" className="readMore">
                Read More
              </NavLink>
            </div>
          </div>  */}
        </div>
        <div className="imgContainer">
          <img src={home_pic} alt="home" />
        </div>
        <footer>
          <div class="copyright">
              <p>All rights reserved &copy;</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
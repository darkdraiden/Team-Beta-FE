import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { signup } from "../Services/user-service";
import { useEffect } from 'react';
// import axios from "axios";
import logo from '../images/logo.png';
import '../Css/HomeStyle.css';
  


const Signup = () => {
  const [inpval, setInpval] = useState({
    memberName: "",
    email: "",
    dob: "",
    password: "",
    profile: "",
    phoneNumber: "",
    address: "",
  });


useEffect(()=>{
    console.log(inpval);
})
const handleProfileChange = (event) => {
  setInpval({ ...inpval, profile: event.target.value });
};

const getdata = (e) => {
  // console.log(e.target.name);
  const { value, name } = e.target;
  setInpval((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const addData = (e) => {
  e.preventDefault();
  const { memberName, email, dob, password, phoneNumber, address, profile } = inpval;

  signup(inpval)
    .then(() => {
      // The request was successful, show success message
      toast.success("User registered successfully");
      setInpval({
        memberName: "",
        email: "",
        dob: "",
        password: "",
        profile: "",
        phoneNumber: "",
        address: ""
      });
    })
    .catch((error) => {
      // Handle the error and show error message
      if (error.response) {
        console.error('Backend Error:', error.response.data);
        toast.error(error.response.data, { position: "top-center" });
      } else if (error.request) {
        console.error('No response received from the server:', error.request);
        toast.error("No response received from the server", { position: "top-center" });
      } else {
        console.error('Error during request setup:', error.message);
        toast.error("An error occurred during the request", { position: "top-center" });
      }
    });

  // Check if the signup request was successful before showing additional messages
  if (
    memberName === "" ||
    email === "" ||
    dob === "" ||
    password === "" ||
    phoneNumber === "" ||
    address === ""
  ) {
    toast.error("All fields are required!", { position: "top-center" });
  } else if (!email.includes("@")) {
    toast.error("Please enter a valid email address", { position: "top-center" });
  } else if (password.length < 5) {
    toast.error("Password length should be greater than or equal to 5", { position: "top-center" });
  } else if (phoneNumber.length !== 10) {
    toast.error("Number should be of 10 digits", { position: "top-center" });
  } else if (profile === "option0") {
    toast.error("Select profile");
  }
};
  

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
    <div className="signup-container mt-5">
      <section className="d-flex justify-content-center">
        <div
          className="right_data mt-5"
          style={{ display: "flex", alignItems: "center"}}
        >
          {/* <div className="sign_img mt-3">
            <img
              src="https://img.freepik.com/free-vector/coworkers-planning-making-objective_1262-19766.jpg?w=1380&t=st=1705671778~exp=1705672378~hmac=d9bfe8a8ad7445925445356d10510251b6f27e97030b25c3cdd4a351ee4c458c"
              style={{ maxWidth: 400 }}
              alt=""
            />
          </div> */}
        </div>
        <div
          className="left_data mt-5 p-5 shadow"
          style={{
            width: "50%",
            border: "1px solid #ddd",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            
            borderRadius:'7px',
            background: '#e0f9ee', 
          }}
          >
          <h3 className="text-center">Sign Up</h3>
          <br />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                name="memberName"
                placeholder="Enter your name"
                onChange={getdata}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={getdata}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDOB">
              <Form.Control
                type="date"
                name="dob"
                defaultValue=""
                onChange={getdata}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  onChange={getdata}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  onChange={getdata}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicProfile">
                {/* <Form.Label>Select Profile</Form.Label> */}
                <Form.Control as="select" name="profile" onChange={handleProfileChange} value={inpval.profile}>  
                  <option value="option0">--select Profile--</option>
                  <option value="frontend">Frontend </option>
                  <option value="backend">Backend</option>
                  <option value="devops">Devops</option>
                  <option value="qa">QA</option> 
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Choose a password"
                  onChange={getdata}
                />
              </Form.Group>

              <Button
                variant="primary"
                className="w-100"
                style={{ background: "rgb(67, 185, 127)" }}
                onClick={addData}
              >
                Sign Up
              </Button>
            </Form>
            <p className="mt-3 p-3">
              If you already have an account?{" "}
              <span>
                <NavLink to="/login">Login Here</NavLink>
              </span>{" "}
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
      <footer>
          <div class="copyright">
              <p>All rights reserved &copy;</p>
          </div>
        </footer>
    </>
  );
};

export default Signup;
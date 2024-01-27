import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { signup } from "../Services/user-service";


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

  const handleProfileChange = (event) => {
    setInpval({ ...inpval, profile: event.target.value });
  };

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addData = async (e) => {
    e.preventDefault();
    for (const key in inpval) {
      if (inpval[key].trim() === "") {
        toast.error("All fields are required!", { position: "top-center" });
        return;
      }
    }
    const { memberName, email, dob, password, phoneNumber, address, profile } = inpval;

    if (memberName.trim() === "") {
      toast.error("Name is required", { position: "top-center" });
      return;
    }
    if (email.trim() === "") {
      toast.error("Email is required", { position: "top-center" });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address", { position: "top-center" });
      return;
    }
    if (phoneNumber.trim() === "") {
      toast.error("Phone Number is required", { position: "top-center" });
      return;
    }
    if (address.trim() === "") {
      toast.error("Address is required", { position: "top-center" });
      return;
    }
    if (inpval.profile.trim() === "option0") {
      toast.error("Please select a profile", { position: "top-center" });
      return;
    }
    if (password.trim() === "") {
      toast.error("Password is required", { position: "top-center" });
      return;
    }
    if (password.length < 8) {
      toast.error("Password length should be at least 8 characters", { position: "top-center" });
      return;
    }

    // Hash the password using bcrypt
    

    const userData = {
      memberName,
      email,
      dob,
      password,
      phoneNumber,
      address,
      profile,
    };

    signup(userData)
      .then(() => {
        toast.success("User registered successfully");
        setInpval({
          memberName: "",
          email: "",
          dob: "",
          password: "",
          profile: "",
          phoneNumber: "",
          address: "",
        });
      })
      .catch((error) => {
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
      console.log(password);
  };

  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-center">
          <div
            className="right_data mt-5"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="sign_img mt-3">
              <img
                src="https://img.freepik.com/free-vector/coworkers-planning-making-objective_1262-19766.jpg?w=1380&t=st=1705671778~exp=1705672378~hmac=d9bfe8a8ad7445925445356d10510251b6f27e97030b25c3cdd4a351ee4c458c"
                style={{ maxWidth: 400 }}
                alt=""
              />
            </div>
          </div>
          <div
            className="left_data mt-5 p-5 shadow"
            style={{
              width: "50%",
              border: "1px solid #ddd",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
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
                  value={inpval.memberName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={getdata}
                  value={inpval.email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDOB">
                <Form.Control
                  type="date"
                  name="dob"
                
                  onChange={getdata}
                  value={inpval.dob}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  onChange={getdata}
                  value={inpval.phoneNumber}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  onChange={getdata}
                  value={inpval.address}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicProfile">
                <Form.Control as="select" name="profile" onChange={handleProfileChange} value={inpval.profile}>
                  <option value="option0">--select Profile--</option>
                  <option value="Java">Java </option>
                  <option value="Python">Python</option>
                  <option value="ELK">ELK</option>
                  <option value="Node Js">Node Js</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Choose a password"
                  onChange={getdata}
                  required
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
                <NavLink to="/auth">Login Here</NavLink>
              </span>{" "}
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Signup;

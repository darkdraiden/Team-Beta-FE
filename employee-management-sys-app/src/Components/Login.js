import React, { useState , useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import { loginf } from "../Services/user-service";
import { useNavigate } from "react-router-dom";
import '../Css/HomeStyle.css';
import logo from '../images/logo.png';
import login_image from '../images/login_image.gif';


const Login = ({setIsAuthenticated,setMember}) => {

  
  const navigate=useNavigate();

  

  const[login,setLogin]=useState({
    email:'',
    password:''
  });
  
//   useEffect(()=>{
//     sessionStorage.getItem("isLoggedIn");
//     console.log(login);
// })

// useEffect(() => {
//   const storedLogin = localStorage.getItem("userLogin");
//   if (storedLogin===undefined) {
//     // setLogin(JSON.parse(storedLogin));
//     console.log(storedLogin);
//   }
// }, []);

  const getdata = (e) => {
    // console.log(e.target.name);
    const { value, name } = e.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const addData = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = login;
      const response = await loginf(login);
      console.log(response);
      if (response) {
        setIsAuthenticated(true);
        setMember(response.member);
        // Assuming response has both token and member properties
        const { token, member } = response;
        // Store token and member details
        console.log("token from login" + token);
        sessionStorage.setItem("isLoggedIn", true);
        localStorage.setItem("memberid", member.member_Id);
        localStorage.setItem("token", token);
        // loginf.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        toast.success("Login Successfully");
        navigate("/");
        setLogin({
          email: "",
          password: "",
        });
      } else {
        // Handle login failure
        toast.error("Please Enter Correct Email or Password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };


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
      <div className="custom-container mt-5">
        <section className='d-flex justify-content-center'> {/* Center the columns */}
        
        <div className="right_data mt-5" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="sign_img mt-3">
              <img src={login_image} style={{ maxWidth: 400 }} alt="" />
            </div>
          </div>
          <div className="left_data mt-5 p-5 shadow" style={{ width: "50%", border: '1px solid #ddd', display: 'flex', flexDirection: 'column', background: '#CDF5FD' ,borderRadius: '7px'}}>
            <h3 className='text-center' style={{ color: '#005A9C' }}>Login</h3>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail"> {/* Removed col-lg-6 */}
                <Form.Control type="email" name='email' placeholder="Enter email" onChange={getdata}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword"> {/* Removed col-lg-6 */}
                <Form.Control type="password" name='password' placeholder="Password" onChange={getdata}/>
              </Form.Group>
              <Button variant="primary" className='w-100' style={{ background: "rgb(67, 185, 127)" }} type="submit" onClick={addData}>  {/* Added w-100 to make the button full width */}
                Submit
              </Button>
            </Form>
            <p className='mt-3 p-3'>If you are not registered? <span><NavLink to='/Signup'>Register Here</NavLink></span> </p>
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
  )
}

export default Login;
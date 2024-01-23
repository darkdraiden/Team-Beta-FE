import React, { useState , useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import { loginf } from "../Services/user-service";



const Login = () => {

  const[login,setLogin]=useState({
    email:'',
    password:''
  });
  useEffect(()=>{
    console.log(login);
})

  const getdata = (e) => {
    // console.log(e.target.name);
    const { value, name } = e.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const addData = (e) => {
    e.preventDefault();
    const {email,password} = login;
  
    loginf(login)
      .then(() => {
        // The request was successful, show success message
        toast.success("Login Successfully");
        setLogin({
          
          email: "",
          password: "",
          
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
  
   
  };
  


  
  return (
    <>
      <div className="container mt-5">
        <section className='d-flex justify-content-center'> {/* Center the columns */}
        
        <div className="right_data mt-5" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="sign_img mt-3">
              <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?size=626&ext=jpg&ga=GA1.1.1389609210.1705655173&semt=sph" style={{ maxWidth: 400 }} alt="" />
            </div>
          </div>
          <div className="left_data mt-5 p-5 shadow" style={{ width: "50%", border: '1px solid #ddd', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column' }}>
            <h3 className='text-center'>Login</h3>
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
    </>
  )
}

export default Login;
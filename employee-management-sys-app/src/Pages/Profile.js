import React, { useEffect, useState } from 'react';
import './ManageTeam.css';
import axios from 'axios';

const Profile = () => {
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [email, setEmail] = useState(''); // State to store email
  const [password, setPassword] = useState(''); // State to store password

  useEffect(() => {
    // Set your logged-in user's email and password
    const userCredentials = {
      email: 'anuj@gmail.com',
      password: '223344',
    };

    // Set email and password states
    setEmail(userCredentials.email);
    setPassword(userCredentials.password);

    // Fetch user data based on email and password
    fetchUserData(userCredentials.email, userCredentials.password);
  }, []);

  const fetchUserData = async (email, password) => {
    try {
      const response = await axios.get(`http://localhost:8080/member/byEmailPass?email=${email}&password=${password}`);
      setLoggedInUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="manageteam-container">
      <div>
        <button>Add Employee</button>
      </div>
      <br />
      <div>
        <h2>Logged-in User Information:</h2>
        {loggedInUserData ? (
          <div>
            <p>EmployeeId: {loggedInUserData.member_Id}</p>
            <p>EmployeeName: {loggedInUserData.memberName}</p>
            <p>EmployeeEmail: {loggedInUserData.email}</p>
            <p>EmployeePhone: {loggedInUserData.phoneNumber}</p>
            <p>Profile: {loggedInUserData.profile}</p>
            <button>Delete</button>
          </div>
        ) : (
          <p>No user found with the given email and password.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;

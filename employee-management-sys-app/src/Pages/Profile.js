import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = ({member}) => {
  
  const [email, setEmail] = useState(''); // State to store email
  const [password, setPassword] = useState(''); // State to store password
  


  useEffect(() => {
   
    setEmail(member.email);
    setPassword(member.password);
    

    // Fetch user data based on email and password
    // fetchUserData(member.email, userCredentials.password);
  }, []);

  

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px', // Adjust margin-top for vertical centering
  };

  const employeeContainerStyle = {
    display: 'inline-block',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '60px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    
  };

  const cellStyle = (index) => ({
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: index % 2 === 0 ? '#E5F6D3' : '#C5E8B7',
    textTransform: 'capitalize',
  });

  const thStyle = {
    backgroundColor: '#C5E8B7',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const fieldsToShow = ['member_Id', 'memberName', 'email', 'phoneNumber', 'profile', 'address'];

  return (
    <div style={containerStyle}>
      <div style={employeeContainerStyle}>
        <h2 style={{color:'green'}}>Logged-in User Information:</h2>
        <br/>
        <div>
          {fieldsToShow.map((field, index) => (
            <p key={field} style={cellStyle(index)}>
              <strong>{field}:</strong> {member[field]}
            </p>
          ))}
        </div>
        
        
      </div>
    </div>
  );
};

export default Profile;

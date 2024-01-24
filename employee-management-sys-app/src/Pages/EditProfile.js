import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfile.css';
import { toast } from 'react-toastify';

const EditProfile = ({member}) => {
  // State to manage form fields

  
  const [formData, setFormData] = useState({
   
    memberName: `${member.memberName}`,
    email: `${member.email}`,
    phoneNumber: `${member.phoneNumber}`,
    profile:`${member.profile}`,
    address: `${member.address}`,
    
    
  });
  console.log(formData);
  
  const [message, setMessage] = useState('');

  const{member_id,memberName,email,phoneNumber,address,dob}=formData;

  // Handle form field changes
  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    console.log(name + " "+value);
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update employee data in the backend
      await axios.put(`http://localhost:8080/member/update/${member.member_Id}`, formData);
      setMessage('Profile updated successfully!');
    } catch (error) {
      // setMessage('Error updating profile. Please try again.');
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="update-profile-container mt-5">
      {/* <h2>Update Profile</h2> */}
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleSubmit} className="update-profile-form mt-5">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="memberName"
            value={formData.memberName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
  <label htmlFor="profile">Profile:</label>
  <select
    id="profile"
    name="profile"
    value={formData.profile}
    onChange={handleInputChange}
    className="form-group"
  >
    <option value="option0">-- Select Profile --</option>
    <option value="frontend">Frontend</option>
    <option value="backend">Backend</option>
    <option value="devops">DevOps</option>
    <option value="qa">QA</option>
  </select>
</div>


        
      
        <button type="submit" className="submit-button">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;

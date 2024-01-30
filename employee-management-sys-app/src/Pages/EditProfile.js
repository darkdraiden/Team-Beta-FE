import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfile.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = ({ member, setMember }) => {
  const id = localStorage.getItem("memberid");
  const [formData, setFormData] = useState({
    memberName: `${member.memberName}`,
    email: `${member.email}`,
    phoneNumber: `${member.phoneNumber}`,
    profile: `${member.profile}`,
    address: `${member.address}`,
  });

  const [message, setMessage] = useState('');

  const { memberId, memberName, email, phoneNumber, address, dob } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token=localStorage.getItem("token");
      const response = await axios.put(`http://localhost:8080/member/update/${member.memberId}`,formData,{headers:{'Authorization':`Bearer ${token}`}});
      setMember(response.data);
      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile. Please try again.');
    }
  };


  const videoStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '0.5', // Adjust video opacity as needed
    zIndex: '-1',
  };

  return (
    <div className="update-profile-container mt-5">
     <video style={videoStyle} autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1218568429/de/video/sternbild-der-blauen-liniensegmente-auf-dem-wei%C3%9Fen-hintergrund.mp4?s=mp4-640x640-is&k=20&c=X7pvsuEQVzJ1ewW3S9hdHooVh6-41CGdc59ko1Ch79M=" type="video/mp4" />
      </video>
     
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleSubmit} className="update-profile-form mt-5">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="memberName"
            value={formData.memberName}
            onChange={handleInputChange}
            disabled
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className='form-group'>
          <label htmlFor="profile">Profile</label>
          <select
            id="profile"
            name="profile"
            value={formData.profile}
            onChange={handleInputChange}
            className="select-field"
          >
            <option value="option0">-- Select Profile --</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="ELK">ELK</option>
            <option value="Node Js">Node Js</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Update Profile
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default EditProfile;






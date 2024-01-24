import React, { useEffect } from 'react';
import './ManageTeam.css';
import axios from 'axios';
import { useState } from 'react';

const ManageTeam = () => {

  const[emp,setEmp]=useState([]);
  

  useEffect(()=>{
    getAllUsers();
   
  },[]);

  console.log(emp);

  const getAllUsers=async()=>{
    
  try {
    const response = await axios.get('http://localhost:8080/member/all-member');
    setEmp(response.data);
    console.log(response.data);
  } catch (error) {
    throw error;
  }
};
  


  return (
    <div className='manageteam-container'>
      <div>
      <button>Add Employee</button>
      </div>
      <br/>
      <div>

<table className="table table-hover table-sm"> 
<thead>
  <tr>
    <th scope="col">EmployeeId</th>
    <th scope="col">EmployeeName</th>
    <th scope="col">EmployeeEmail</th>
    <th scope="col">EmployeePhone</th>
    <th scope="col">Profile</th>
    <th scope="col">Action</th>
  </tr>
  </thead>
  <tbody>
    { emp && Array.isArray(emp) ?(
      emp.map(({member_Id,memberName,email,phoneNumber,profile})=>(
        <tr key={member_Id}>
          <td scope='row'>{member_Id}</td>
          <td >{memberName}</td>
          <td >{email}</td>
          <td >{phoneNumber}</td>
          <td >{profile}</td>
          <td><button>Delete</button></td>
        </tr>
      ))
    ):(<tr></tr>)
    }
  </tbody>

</table>

    </div>
    </div>
  )
}
export default ManageTeam;

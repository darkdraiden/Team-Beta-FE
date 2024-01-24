import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaves = ({ memberId }) => {
  const [leaveCount, setLeaveCount] = useState(0);

  // Fetch initial leave count on component mount
  useEffect(() => {
    fetchLeaveCount();
  }, []);

  const fetchLeaveCount = async () => {
    try {
      // Assume your backend API provides the leave count for a member
      const response = await axios.get(`http://localhost:8080/member/${memberId}/leaveCount`);
      setLeaveCount(response.data.leaveCount);
    } catch (error) {
      console.error('Error fetching leave count:', error);
    }
  };

  const handleApplyLeave = async () => {
    try {
      // Send a request to the backend to apply leave
      await axios.post(`http://localhost:8080/member/${memberId}/applyLeave`);
      // Update the leave count in the state
      setLeaveCount(prevLeaveCount => prevLeaveCount - 1);
    } catch (error) {
      console.error('Error applying leave:', error);
    }
  };

  return (
    <div>
      <h2>Leave Management</h2>
      <p>Remaining Leaves: {leaveCount}</p>
      <button onClick={handleApplyLeave}>Apply Leave</button> <br/><br/>
      <button onClick={fetchLeaveCount}>View Leaves</button>
    </div>
  );
};

export default Leaves;

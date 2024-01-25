// Leaves.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaves = ({ member }) => {
  const [leaveCount, setLeaveCount] = useState(0);

  useEffect(() => {
    fetchLeaveCount();
  }, [member]);

  const fetchLeaveCount = async () => {
    try {
      if (member && member.member_Id) {
        const response = await axios.get(`http://localhost:8080/member/leaves/${member.member_Id}`);
        setLeaveCount(response.data);
      }
    } catch (error) {
      console.error('Error fetching leave count:', error);
    }
  };

  useEffect(() => {
    console.log('Leave Count Updated:', leaveCount);
  }, [leaveCount]);

  const handleApplyLeave = async () => {
    try {
      if (member && member.member_Id) {
        const response = await axios.put(`http://localhost:8080/member/leaves/${member.member_Id}`);
        console.log(response);
        // Fetch the updated leave count after applying leave
        await fetchLeaveCount();
      }
    } catch (error) {
      console.error('Error applying leave:', error);
    }
  };

  const handleViewLeaves = async () => {
    try {
      // Wait for handleApplyLeave to complete before fetching the count
      await handleApplyLeave();
      console.log("view leaves");
      const response = await axios.get(`http://localhost:8080/member/leaves/${member.member_Id}`);
      setLeaveCount(response.data);
    } catch (error) {
      console.error('Error fetching leave count:', error);
    }
  };

  return (
    <div>
      <h2>Leave Management</h2>
      <p>Remaining Leaves: {leaveCount}</p>
      <button onClick={handleApplyLeave}>Apply Leave</button> <br/><br/>
      <button onClick={handleViewLeaves}>View Leaves</button>
    </div>
  );
};

export default Leaves;
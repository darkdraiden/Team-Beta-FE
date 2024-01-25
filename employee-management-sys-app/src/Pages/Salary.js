import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Salary = ({ member }) => {
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    // Fetch salary on component mount
    fetchSalary();
  }, []);

  const fetchSalary = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/member/salary/${member.member_Id}`);
      setSalary(response.data);
    } catch (error) {
      console.error('Error fetching salary:', error);
    }
  };

  const handleFetchSalary = () => {
    // Trigger fetching salary when the button is clicked
    fetchSalary();
  };

  return (
    <div style={styles.centeredContainer}>
      <div style={styles.salaryContainer}>
        <h2>Salary Information</h2>
        <p style={styles.salaryAmount}>Salary: ${salary}</p>
        <button style={styles.fetchSalaryButton} onClick={handleFetchSalary}>
          Fetch Salary
        </button>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  centeredContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Adjust if needed
  },
  salaryContainer: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  salaryAmount: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  fetchSalaryButton: {
    backgroundColor: '#579d51',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Salary;

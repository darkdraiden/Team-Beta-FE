// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Salary = ({ member }) => {
//   const [salary, setSalary] = useState(0);
//   const [showSalary, setShowSalary] = useState(false);

//   const fetchSalary = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/member/salary/${member.member_Id}`);
//       console.log(response.data);
//       setSalary(response.data);
//       setShowSalary(true); // Show salary after fetching
//     } catch (error) {
//       console.error('Error fetching salary:', error);
//     }
//   };

//   const handleFetchSalary = () => {
//     // Trigger fetching salary when the button is clicked
//     fetchSalary();
//   };

//   return (
//     <div style={styles.centeredContainer}>
//       <div style={styles.salaryContainer}>
//         <h2>Salary Information</h2>
//         {showSalary && <p style={styles.salaryAmount}>Salary: ${salary}</p>}
//         <button style={styles.fetchSalaryButton} onClick={handleFetchSalary}>
//           Fetch Salary
//         </button>
//       </div>
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   centeredContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh', // Adjust if needed
//     backgroundColor: '#f0f0f0',
//   },
//   salaryContainer: {
//     textAlign: 'center',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//   },
//   salaryAmount: {
//     fontSize: '18px',
//     marginBottom: '20px',
//   },
//   fetchSalaryButton: {
//     backgroundColor: '#579d51',
//     color: 'white',
//     border: 'none',
//     padding: '10px 20px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

// export default Salary;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VictoryBar, VictoryPie, VictoryTooltip } from 'victory';

const Salary = ({ member }) => {
  const [chartData, setChartData] = useState([]);
  const [showCharts, setShowCharts] = useState(false);
  const [salaryDetails, setSalaryDetails] = useState(null);

  useEffect(() => {
    setShowCharts(false);
    setSalaryDetails(null);
  }, [member]);

  const fetchSalary = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/member/salary/${member.member_Id}`);
      console.log(response.data);

      const ctc = 50000; // Assuming CTC is $50,000
      const salary = ctc / 12; // Monthly salary
      const tax = 0.1 * salary; // Assuming tax is 10% of the salary

      // Calculate gross salary
      const grossSalary = salary + tax;

      // Calculate net salary
      const netSalary = salary;

      const newChartData = [
        { x: 'Salary', y: salary, color: '#579d51', label: `Salary: $${salary.toFixed(2)}` },
        { x: 'Tax', y: tax, color: '#ff5733', label: `Tax: $${tax.toFixed(2)}` },
        { x: 'Net Salary', y: netSalary, color: '#4285f4', label: `Net Salary: $${netSalary.toFixed(2)}` },
        { x: 'Gross Salary', y: grossSalary, color: '#fbbc05', label: `Gross Salary: $${grossSalary.toFixed(2)}` },
      ];

      const salaryMessage = `Your total CTC is $${ctc}. Your monthly salary is $${salary.toFixed(2)}. Net Salary: $${netSalary.toFixed(2)}. Gross Salary: $${grossSalary.toFixed(2)}. Taxes: $${tax.toFixed(2)}.`;

      setChartData(newChartData);
      setShowCharts(true);
      setSalaryDetails(salaryMessage);
    } catch (error) {
      console.error('Error fetching salary:', error);
    }
  };

  const handleFetchSalary = () => {
    fetchSalary();
  };
  const videoStyle = {
    position: 'fixed', // Change from 'absolute' to 'fixed'
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '0.5', // Adjust video opacity as needed
    zIndex: '-1',
  };
  
  

  return (
    
    <div style={styles.centeredContainer}>
     <video style={videoStyle} autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1218568429/de/video/sternbild-der-blauen-liniensegmente-auf-dem-wei%C3%9Fen-hintergrund.mp4?s=mp4-640x640-is&k=20&c=X7pvsuEQVzJ1ewW3S9hdHooVh6-41CGdc59ko1Ch79M=" type="video/mp4" />
      </video>
      <div style={styles.container}>
        <div style={styles.chartContainer}>
          {showCharts && (
            <VictoryBar
              data={chartData}
              style={{
  data: { fill: '#365486'},
  axis: { stroke: 'none' },
  grid: { stroke: (t) => (t % 2 === 0 ? '#579d51' : '#fbbc05') }, // Alternating colors for the grid
}}

              colorScale={['#EB5353', '#ff5733', '#4285f4', '#fbbc05']}
              labels={({ datum }) => datum.label}
              labelComponent={<VictoryTooltip />}
            />
          )}
        </div>
        <div style={styles.chartContainer}>
          {showCharts && (
            <VictoryPie
              data={chartData}
              colorScale={['#579d51', '#ff5733', '#4285f4', '#fbbc05']}
              style={{
                parent: { marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 },
                labels: {  fill: 'black', fontSize: 12, padding: 8},
                data: { strokeWidth: 0.5, stroke: 'red' },
                grid: { stroke: '#ccc' },
              }}
              labels={({ datum }) => `${datum.x}: $${datum.y.toFixed(2)}`}
              labelComponent={<VictoryTooltip />}
            />
          )}
        </div>
      </div>
      {salaryDetails && <p>{salaryDetails}</p>}
      
      <button style={styles.fetchSalaryButton} onClick={handleFetchSalary}>
        View Salary
      </button>
      <img
        src="https://www.cpapracticeadvisor.com/wp-content/uploads/sites/2/2022/07/20145/Professional_Payroll_Services_Can_Help_Small_Businesses_1_.56264d2be7d44.png"
        alt="Payroll Services"
        style={{ width: '32%', marginTop: '100px' }}
      />
      


    </div>
  );
};

// Inline styles
const styles = {
  centeredContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // minHeight: '50vh',
    // backgroundColor: '',
    marginTop: '52px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    maxWidth: '1000px',
    border: '1px solid black',
    backgroundColor: '#89CFF3',
    marginTop:'32px',
  },
  chartContainer: {
    width: '48%', // Adjust width as needed
    margin: '10px',
  },
  fetchSalaryButton: {
    backgroundColor: '#39A7FF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Salary;

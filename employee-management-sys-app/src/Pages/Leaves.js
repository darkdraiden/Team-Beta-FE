


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const Leaves = ({ member }) => {
//   const [leaveCount, setLeaveCount] = useState(0);
//   const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);

//   useEffect(() => {
//     fetchLeaveCount();
//   }, [member]);

//   const fetchLeaveCount = async () => {
//     try {
//       if (member && member.member_Id) {
//         const response = await axios.get(`http://localhost:8080/member/leaves/${member.member_Id}`);
//         setLeaveCount(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching leave count:', error);
//     }
//   };

//   const handleApplyLeave = async () => {
//     try {
//       if (member && member.member_Id) {
//         await axios.put(`http://localhost:8080/member/leaves/${member.member_Id}`);
//         await fetchLeaveCount();
//         setIsApplyModalOpen(false);
//       }
//     } catch (error) {
//       console.error('Error applying leave:', error);
//     }
//   };

//   const handleViewLeaves = async () => {
//     try {
//       await handleApplyLeave();
//       setIsViewModalOpen(true);
//     } catch (error) {
//       console.error('Error fetching leave count:', error);
//     }
//   };

//   const handleCloseViewModal = () => {
//     setIsViewModalOpen(false);
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <Card style={{ maxWidth: 400 }}>
//         <CardContent style={{ textAlign: 'center' }}>
//           <h2>Leave Management</h2>
//           {/* <p>Remaining Leaves: {leaveCount}</p> */}
//           <Button
//             variant="contained"
//             onClick={() => setIsApplyModalOpen(true)}
//             style={{ backgroundColor: '#4caf50', color: 'white' }}
//           >
//             Apply Leave
//           </Button>
//           <br/><br/>
//           <Button
//             variant="contained"
//             onClick={handleViewLeaves}
//             style={{ backgroundColor: '#4caf50', color: 'white' }}
//           >
//             View Leaves
//           </Button>
//         </CardContent>

//         {/* Apply Leave Modal */}
//         <Modal open={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)}>
//           <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//             <Typography variant="h6" component="h2" >
//               Apply Leave
//             </Typography>
//             <Button variant="contained" onClick={handleApplyLeave} style={{ backgroundColor: '#4caf50', color: 'white' }} >
//               Confirm Apply Leave
//             </Button>
//           </Box>
//         </Modal>

//         {/* View Leaves Modal */}
//         <Modal open={isViewModalOpen} onClose={handleCloseViewModal}>
//           <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//             <Typography variant="h6" component="h2">
//               View Leaves
//             </Typography>
//             <p>Remaining Leaves: {leaveCount}</p>
//           </Box>
//         </Modal>
//       </Card>
//     </div>
//   );
// };

// export default Leaves;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Leaves = ({ member }) => {
  const [leaveCount, setLeaveCount] = useState(0);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

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

  const handleApplyLeave = async () => {
    try {
      if (member && member.member_Id) {
        await axios.put(`http://localhost:8080/member/leaves/${member.member_Id}`);
        await fetchLeaveCount();
        setIsApplyModalOpen(false);
      }
    } catch (error) {
      console.error('Error applying leave:', error);
    }
  };

  const handleViewLeaves = async () => {
    try {
      await handleApplyLeave();
      setIsViewModalOpen(true);
    } catch (error) {
      console.error('Error fetching leave count:', error);
    }
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
      <Card style={{ maxWidth: 400 }}>
        <CardContent style={{ textAlign: 'center' }}>
          <h2>Leave Management</h2>
          <p>Remaining Leaves: {leaveCount}</p>
          <Button
            variant="contained"
            onClick={() => setIsApplyModalOpen(true)}
            style={{ backgroundColor: '#4caf50', color: 'white' }}
          >
            Apply Leave
          </Button>
          <br/><br/>
          <Button
            variant="contained"
            onClick={handleViewLeaves}
            style={{ backgroundColor: '#4caf50', color: 'white' }}
          >
            View Leaves
          </Button>
        </CardContent>

        {/* Apply Leave Modal */}
        <Modal open={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <Typography variant="h6" component="h2" >
              Apply Leave
            </Typography>
            <Button variant="contained" onClick={handleApplyLeave} style={{ backgroundColor: '#4caf50', color: 'white' }} >
              Confirm Apply Leave
            </Button>
          </Box>
        </Modal>

        {/* View Leaves Modal */}
        <Modal open={isViewModalOpen} onClose={handleCloseViewModal}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <Typography variant="h6" component="h2">
              View Leaves
            </Typography>
            <p>Remaining Leaves: {leaveCount}</p>
          </Box>
        </Modal>
      </Card>
    </div>
  );
};

export default Leaves;

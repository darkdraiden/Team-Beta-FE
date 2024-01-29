


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
import { AddCircleOutline, Visibility } from '@mui/icons-material';

const Leaves = ({ member }) => {
  const [leaveCount, setLeaveCount] = useState(0);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // useEffect(() => {
  //   fetchLeaveCount();
  // }, [member]);

  const token=localStorage.getItem("token");
const bearerToken="Bearer "+token;

  const fetchLeaveCount = async () => {
    try {
      if (member && member.member_Id) {
        console.log( bearerToken);
        console.log("leave token"+token);
        const response = await axios.get(`http://localhost:8080/member/leaves/${member.member_Id}`,{headers:{'Authorization':bearerToken}});
        setLeaveCount(response.data);
      }
    } catch (error) {
      console.error('Error fetching leave count:', error);
    }
  };


  const handleApplyLeave  = async () => {
    try {
      if (member && member.member_Id) {
        console.log( bearerToken);
        console.log("leave token"+token);
        // const response = await axios.get(`http://localhost:8080/member/leaves/${member.member_Id}`,{headers:{'Authorization':bearerToken}});
        const response = await axios.put(`http://localhost:8080/member/leaves/${member.member_Id}`,{},{headers:{'Authorization':bearerToken}});
        // setLeaveCount(response.data);
      //  fetchLeaveCount();
        setIsApplyModalOpen(false);
      }
    } catch (error) {
      console.error('Error fetching leave count:', error);
    }
  };
  // const handleApplyLeave = async () => {
  //   try {
  //     if (member && member.member_Id) {
  //       console.log("leave token from leave apply page"+oken);
  //       await axios.put(`http://localhost:8080/member/leaves/${member.member_Id}`,{headers:{'Authorization':bearerToken}});
  //       console.log("apply leave");
  //       await fetchLeaveCount();
  //       setIsApplyModalOpen(false);
  //     }
  //   } catch (error) {
  //     console.error('Error applying leave:', error);
  //   }
  // };

  const handleViewLeaves = () => {
    try {
      setIsViewModalOpen(true);
      fetchLeaveCount();
    } catch (error) {
      console.error('Error fetching leave count:', error);
    }
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const buttonStyle = { backgroundColor: '#00A9FF', color: 'white', margin: '0.5rem' };
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: '252px', marginLeft:'100px' }}>
    <video style={videoStyle} autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1218568429/de/video/sternbild-der-blauen-liniensegmente-auf-dem-wei%C3%9Fen-hintergrund.mp4?s=mp4-640x640-is&k=20&c=X7pvsuEQVzJ1ewW3S9hdHooVh6-41CGdc59ko1Ch79M=" type="video/mp4" />
      </video>
      
      <Card style={{ maxWidth: 400, background: '#91CEFF' }}>
        <CardContent style={{ textAlign: 'center' }}>
          <Typography variant="h4" component="div"  >
            Leave Management
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {/* Remaining Leaves: {leaveCount} */}
          </Typography>
          <Button
            variant="contained"
            onClick={() => {setIsApplyModalOpen(true) 
          }}
            startIcon={<AddCircleOutline />}
            style={buttonStyle}
          >
            Apply Leave
          </Button>
          <Button
            variant="contained"
            onClick={handleViewLeaves}
            startIcon={<Visibility />}
            style={buttonStyle}
          >
            View Leaves
          </Button>
        </CardContent>

        {/* Apply Leave Modal */}
        <Modal open={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)}>
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2">
              Apply Leave
            </Typography>
            <Button variant="contained" onClick={handleApplyLeave} style={buttonStyle}>
              Confirm Apply Leave
            </Button>
          </Box>
        </Modal>

        {/* View Leaves Modal */}
        <Modal open={isViewModalOpen} onClose={handleCloseViewModal}>
          <Box sx={modalStyle}>
            <Typography variant="h6" style={{ color: 'blue' }} >
              View Leaves
            </Typography>
            <Typography variant="body1" style={{ color: 'blue' }}>

              Remaining Leaves: {leaveCount}
            </Typography>
            <Button
    variant="contained"
    onClick={handleCloseViewModal}
    style={{ backgroundColor: 'blue', color: 'white' }}
  >
    Close
  </Button>



          </Box>

        </Modal>
        <img src="https://www.cflowapps.com/wp-content/uploads/2018/07/leave-management-process.png" alt="Leave Management Process" style={{ marginTop: '40px', width: '60%' }} />
      </Card>

     
    </div>
  );
};

export default Leaves;


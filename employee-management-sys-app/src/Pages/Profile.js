// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Profile.css';

// const Profile = ({member,setMember}) => {
  
//   const [email, setEmail] = useState(''); // State to store email
//   const [password, setPassword] = useState(''); // State to store password
//   const id=localStorage.getItem("memberid");

//   const refData = async () => {
//     console.log(id);
//       const response = await axios.get(`http://localhost:8080/member/member-byId/${id}`);
//       console.log(response);
//      setMember(response.data);

    
//   };

//   useEffect(() => {
   
//     setEmail(member.email);
//     setPassword(member.password);
//     refData();

    
//   }, []);

  

//   const containerStyle = {
//     textAlign: 'center',
//     marginTop: '50px', // Adjust margin-top for vertical centering
//   };

//   const employeeContainerStyle = {
//     display: 'inline-block',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     marginTop: '60px',
//   };
//   const videoStyle = {
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     opacity: '0.5', // Adjust video opacity as needed
//     zIndex: '-1',
//   };

//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginTop: '20px',
    
//   };

//   const cellStyle = (index) => ({
//     border: '1px solid #ddd',
//     padding: '8px',
//     backgroundColor: index % 2 === 0 ? '#E5F6D3' : '#C5E8B7',
//     textTransform: 'capitalize',
//   });

//   const thStyle = {
//     backgroundColor: '#C5E8B7',
//   };

//   const buttonStyle = {
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     padding: '8px 16px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     display: 'inline-block',
//     fontSize: '14px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   };

//   const buttonHoverStyle = {
//     backgroundColor: '#0056b3',
//   };

//   const fieldsToShow = ['member_Id', 'memberName', 'email', 'phoneNumber', 'profile', 'address'];

//   return (
//     <div style={containerStyle}>
//     <video style={videoStyle} autoPlay loop muted>
//         <source src="https://media.istockphoto.com/id/1218568429/de/video/sternbild-der-blauen-liniensegmente-auf-dem-wei%C3%9Fen-hintergrund.mp4?s=mp4-640x640-is&k=20&c=X7pvsuEQVzJ1ewW3S9hdHooVh6-41CGdc59ko1Ch79M=" type="video/mp4" />
//       </video>
//       <div style={employeeContainerStyle}>
//         <h2 style={{color:'green'}}>Logged-in User Information:</h2>
//         <br/>
//         <div>
//           {fieldsToShow.map((field, index) => (
//             <p key={field} style={cellStyle(index)}>
//               <strong>{field}:</strong> {member[field]}
//             </p>
//           ))}
//         </div>
        
        
//       </div>
//     </div>
//   );
// };

// export default Profile;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = ({ member, setMember }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const id = localStorage.getItem('memberid');

  const refData = async () => {
    console.log(id);
    const response = await axios.get(`http://localhost:8080/member/member-byId/${id}`);
    console.log(response);
    setMember(response.data);
  };

  useEffect(() => {
    setEmail(member.email);
    setPassword(member.password);
    refData();
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',  // Stack items vertically
    alignItems: 'center',
    marginTop: '100px',
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginLeft:'120px',
  };

  const employeeContainerStyle = {
    display: 'inline-block',
    marginTop: '20px',  // Adjust margin as needed
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#89CFF3', // Light blue background
    marginLeft:'120px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const cellStyle = (index) => ({
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: index % 2 === 0 ? '#A0E9FF' : '#CDF5FD',
    textTransform: 'capitalize',
  });

  const thStyle = {
    backgroundColor: '#C5E8B7',
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

  const fieldsToShow = ['member_Id', 'memberName', 'email', 'phoneNumber', 'profile', 'address'];

  return (
    <div style={containerStyle}>
     <video style={videoStyle} autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1218568429/de/video/sternbild-der-blauen-liniensegmente-auf-dem-wei%C3%9Fen-hintergrund.mp4?s=mp4-640x640-is&k=20&c=X7pvsuEQVzJ1ewW3S9hdHooVh6-41CGdc59ko1Ch79M=" type="video/mp4" />
      </video>
      <div>
        {/* Replace the source with the actual path to the profile image */}
        <img src="https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png" alt="Profile Avatar" style={avatarStyle} />
      </div>
      <div style={employeeContainerStyle}>
        <h2 style={{ color: '#0087FF' }}>Logged-in User Information:</h2>
        <br />
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

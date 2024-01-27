
import React from 'react';
import { Link } from 'react-router-dom';


const Nvbar = ({name,setIsAuthenticated}) => {
 


  const navbarStyle = {
    backgroundColor: '#198754 ', 
  };
  const handleLogOut=()=>{
    sessionStorage.setItem("isLoggedIn",false);
   setIsAuthenticated(false);
  
  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-success mb-3" style={navbarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           <img src="data:image/jpeg;base64,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" alt="Logo" className="logo rounded" style={{ width: '50px', height: 'auto', marginRight: '8px' }}/>
            EmployeeEase
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
            <li className="nav-item text-White">
                <span className="nav-link text-white"> Hi, {name}</span>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-white" href="/auth" onClick={handleLogOut} >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nvbar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Nvbar = ({ name, setIsAuthenticated }) => {
//   const handleLogOut = () => {
//     sessionStorage.setItem('isLoggedIn', false);
//     setIsAuthenticated(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container">
//         <Link to="/" className="navbar-brand">
//           <img src="" alt="Logo" className="logo rounded" style={{ width: '50px', height: 'auto', marginRight: '8px' }} />
//           EmployeeEase
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//             </li>

//             <li className="nav-item">
//               <span className="nav-link">Hi, {name}</span>
//             </li>

//             <li className="nav-item">
//               <Link to="/auth" className="nav-link" onClick={handleLogOut}>
//                 <i className="fas fa-sign-out-alt"></i> Logout
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nvbar;

// import React from "react";
// import DigitalClock from "./DigitalClock";
// import './Dash.css';

// const Dash = () => {
//   // Your logic for fetching or managing card data

//   return (
//     <div >
//       <div>
//         <DigitalClock/>
//       </div>
//       <div className="dashboard-container">
//         <img
//           src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-18636.jpg?w=1800&t=st=1706022757~exp=1706023357~hmac=a32a9d7dddd394afe4a9bff72f30c23b3ce089c84583959f4722f8aaf003729e"
//           className="card-img-top"
//           alt="Card Image"
//           style={{ height: "450px", width: "680px", marginTop: "90px" }}
//         />
//       </div>
//       <div>
//         <div className="mt-5 heading-container">
//           <h2>Welcome To EmployeeEase</h2>
//           <br />
//           <h4>Himanshi</h4>
//         </div>
//       </div>


// </div>

     
    
//   );
// };

// export default Dash;



// import {useEffect,useState} from 'react';

// import React from 'react';
// // import PieChart from './Piechart';
// const Dash=()=>{
//   return (
//     <div class="col main pt-5 mt-3">
         
//         {/* <nav aria-label="breadcrumb">
//         <ol class="breadcrumb">
//             <li class="breadcrumb-item"><a href="#">Home</a></li>
//             <li class="breadcrumb-item"><a href="#">Library</a></li>
//             <li class="breadcrumb-item active" aria-current="page">Data</li>
//         </ol>
//         </nav> */}
//         {/* <p class="lead d-none d-sm-block">Add Employee Details and Records</p>
//         <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
//             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                 <span aria-hidden="true">×</span>
//                 <span class="sr-only">Close</span>
//             </button>
//             <strong>Data and Records</strong> Learn more about employee
//         </div> */}
//         <div class="row mb-3">
//             <div class="col-xl-3 col-sm-6 py-2 mt-5">
//                 <div class="card bg-success text-white h-100">
//                     <div class="card-body bg-success" style={{backgroundColor:"#57b960", marginLeft:'80px'}}>
//                         <div class="rotate">
//                             <i class="fa fa-user fa-4x"></i>
//                         </div>
//                         <h6 class="text-uppercase">Users</h6>
//                         <h1 class="display-4">134</h1>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xl-3 col-sm-6 py-2">
//                 <div class="card text-white bg-danger h-100">
//                     <div class="card-body bg-danger">
//                         <div class="rotate">
//                             <i class="fa fa-list fa-4x"></i>
//                         </div>
//                         <h6 class="text-uppercase">Posts</h6>
//                         <h1 class="display-4">87</h1>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xl-3 col-sm-6 py-2">
//                 <div class="card text-white bg-info h-100">
//                     <div class="card-body bg-info">
//                         <div class="rotate">
//                           <i class="fab fa-twitter fa-4x"></i>
//                         </div>
//                         <h6 class="text-uppercase">Tweets</h6>
//                         <h1 class="display-4">125</h1>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-xl-3 col-sm-6 py-2">
//                 <div class="card text-white bg-warning h-100">
//                     <div class="card-body">
//                         <div class="rotate">
//                             <i class="fa fa-share fa-4x"></i>
//                         </div>
//                         <h6 class="text-uppercase">Shares</h6>
//                         <h1 class="display-4">36</h1>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr/>
        
               
//             </div>
            
            
        


        
        
//   )
// }
// export default Dash;



import React from 'react';
import './Dash.css'; // Import your CSS file for custom styles
import DigitalClock from './DigitalClock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Calendar from './Calender';

const Dash = () => {
  const cardStyle = {
    width: '200px', // Set your preferred width
    height: '200px', // Set your preferred height
    marginLeft: '80px',
  };

  const iconStyle = {
    fontSize: '3em', // Set your preferred font size for the icons
    marginBottom: '10px', // Optional: Adjust the space between the icon and text
  };

  return (
    <div className="container mt-5 my-container">
      <div className="row mt-5">

        <div className="col-md-4 mx-auto mt-4 text-center">
          <div className="card my-card" style={cardStyle}>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center">
                <h5 className="card-title">Total Employees</h5>
                <FontAwesomeIcon icon={faUsers} style={iconStyle} />
                <p className="card-text">10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mx-auto mt-4 text-center">
          <div className="card my-card" style={cardStyle}>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center">
                <h5 className="card-title">Total Profiles</h5>
                <FontAwesomeIcon icon={faAddressCard} style={iconStyle} />
                <p className="card-text">4</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mx-auto mt-4 text-center">
          <div className="card my-card" style={cardStyle}>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center">
                <h5 className="card-title">Digital Clock</h5>
                <DigitalClock />
              </div>
            </div>
          </div>
        </div>
        {/* <Calendar/> */}

      </div>
    </div>
  );
}

export default Dash;

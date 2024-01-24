import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const TotalEmployeesCard = () => {
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
    <div className="col-md-4 mx-auto mt-4 text-center">
      {/* Card structure */}

      
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
    
  );
}

export default TotalEmployeesCard;
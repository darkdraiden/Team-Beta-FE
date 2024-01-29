// import React, { useState } from 'react';
// // import './Calendar.css'; // Import your CSS file for styling
// import './Calender.css';

// const Calendar = () => {
//   // Use state to manage the selected date
//   const [selectedDate, setSelectedDate] = useState(null);

//   // Function to handle date selection
//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="calendar-container">
//       <h2>Calendar</h2>
//       <div className="calendar">
//         {/* Render your calendar here */}
//         {/* For simplicity, I'm just showing a grid of dates */}
//         {Array.from({ length: 31 }, (_, index) => index + 1).map((date) => (
//           <div
//             key={date}
//             className={`date ${selectedDate === date ? 'selected' : ''}`}
//             onClick={() => handleDateClick(date)}
//           >
//             {date}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

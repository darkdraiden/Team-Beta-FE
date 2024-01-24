import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1));
  };

  return (
    <div style={{ width: '300px', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {daysInMonth.map((day) => (
          <div
            key={day.toISOString()}
            style={{
              width: '40px', // Adjusted width
              height: '40px', // Adjusted height
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '2px',
              fontSize: '16px', // Adjusted font size
              backgroundColor: isSameMonth(day, currentMonth) ? '#e0e0e0' : 'transparent',
              color: isSameMonth(day, currentMonth) ? 'black' : '#a0a0a0',
              border: isToday(day) ? '2px solid #007bff' : '1px solid #ccc', // Added border
              borderRadius: isToday(day) ? '50%' : '0',
            }}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

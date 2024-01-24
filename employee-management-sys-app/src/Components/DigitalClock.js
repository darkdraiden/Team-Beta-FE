import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  // Calculate angles for clock hands
  const secondHandAngle = (seconds / 60) * 360;
  const minuteHandAngle = ((minutes * 60 + seconds) / 3600) * 360;
  const hourHandAngle = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30);

  const clockStyle = {
    position: 'relative',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '2px solid #333',
    overflow: 'hidden',
  };

  const handStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transformOrigin: '50% 100%',
    transform: 'translateX(-50%) translateY(-100%)',
    backgroundColor: '#333',
    transition: 'transform 0.5s cubic-bezier(0.4, 2.3, 0.6, 1)',
  };

  const secondHandStyle = {
    ...handStyle,
    height: '50%',
    width: '2px',
    transform: `translateX(-50%) translateY(-100%) rotate(${secondHandAngle}deg)`,
  };

  const minuteHandStyle = {
    ...handStyle,
    height: '40%',
    width: '4px',
    transform: `translateX(-50%) translateY(-100%) rotate(${minuteHandAngle}deg)`,
  };

  const hourHandStyle = {
    ...handStyle,
    height: '30%',
    width: '6px',
    transform: `translateX(-50%) translateY(-100%) rotate(${hourHandAngle}deg)`,
  };

  const centerCircleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#333',
  };

  return (
    <div style={clockStyle}>
      <div style={secondHandStyle}></div>
      <div style={minuteHandStyle}></div>
      <div style={hourHandStyle}></div>
      <div style={centerCircleStyle}></div>
    </div>
  );
};

export default DigitalClock;

  
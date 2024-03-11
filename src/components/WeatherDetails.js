import React from 'react';

const WeatherDetails = ({ weather }) => {
  if (!weather) {
    return <div>No weather data available.</div>;
  }

  return (
    <div>
      <h2>{weather.city}</h2>
      {weather.hourly.map((hour, index) => (
        <div key={index}>
          <p>{new Date(hour.dt * 1000).toLocaleTimeString()}: {hour.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
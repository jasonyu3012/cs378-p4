import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = (city) => {
    const API_KEY = 'ad491cdb72816cd7d6246d3b3b2ed36c';
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    axios.get(URL)
      .then((response) => {
        const hourlyData = response.data.list.map(item => ({
          dt: item.dt,
          temp: item.main.temp
        }));

        setWeather({
          city: response.data.city.name,
          hourly: hourlyData
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleSearch = (city) => {
    fetchWeather(city);
  };

  const handleQuickSearch = (city) => {
    fetchWeather(city);
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      <div>
        <button onClick={() => handleQuickSearch('Austin')}>Austin</button>
        <button onClick={() => handleQuickSearch('Houston')}>Houston</button>
        <button onClick={() => handleQuickSearch('Dallas')}>Dallas</button>
      </div>
      <WeatherDetails weather={weather} />
    </div>
  );
};

export default App;
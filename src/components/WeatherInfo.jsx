import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../store/actions';

const WeatherInfo = () => {
  const weather = useSelector((state) => state.weather.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather('New York')); // Change city as needed
  }, [dispatch]);

  if (!weather) return null;

  return (
    <div className="bg-blue-100 p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold mb-2">Current Weather</h2>
      <p>{weather.name}</p>
      <p>{(weather.main.temp )}°C</p>
    </div>
  );
};

export default WeatherInfo;

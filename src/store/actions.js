// store/actions.js

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id,
});

export const toggleAuth = () => ({
  type: 'TOGGLE_AUTH',
});

export const setWeather = (weather) => ({
  type: 'SET_WEATHER',
  payload: weather,
});

export const fetchWeather = (city) => (dispatch) => {
  // API call to fetch weather
  const API_KEY ='168771779c71f3d64106d8a88376808a' ;
  const city='ludhiana' ;// Replace with your API key
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setWeather(data));
    })
    .catch((error) => {
      console.error('Error fetching weather:', error);
    });
};


// store/weatherReducer.js
const initialState = {
  weather: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return { ...state, weather: action.payload };

    default:
      return state;
  }
};

export default weatherReducer;

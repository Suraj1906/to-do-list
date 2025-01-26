const initialState = {
  isAuthenticated: JSON.parse(sessionStorage.getItem('isAuthenticated')) || false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_AUTH':
      const newAuthState = !state.isAuthenticated;
      sessionStorage.setItem('isAuthenticated', JSON.stringify(newAuthState));
      return { ...state, isAuthenticated: newAuthState };

    default:
      return state;
  }
};

export default authReducer;

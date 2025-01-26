import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuth } from '../store/actions';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleAuthToggle = () => {
    dispatch(toggleAuth());
  };

  return (
    <header className="bg-lime-300 text-white p-4 flex  justify-between  items-center">
      <h1 className="text-2xl font-bold  text-blue-600">To-Do App</h1>
      <button
        onClick={handleAuthToggle}
        className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded"
      >
        {isAuthenticated ? (
          <>
            <FaSignOutAlt />
            Logout
          </>
        ) : (
          <>
            <FaSignInAlt />
            Login
          </>
        )}
      </button>
    </header>
  );
};

export default Header;

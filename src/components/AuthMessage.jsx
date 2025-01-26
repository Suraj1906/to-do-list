import React from 'react';
import { useSelector } from 'react-redux';

const AuthMessage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) return null;

  return (
    <div className="bg-red-100 text-red-700 p-4 rounded shadow mb-4">
      <p>You are not logged in. Please log in to add or manage tasks.</p>
    </div>
  );
};

export default AuthMessage;

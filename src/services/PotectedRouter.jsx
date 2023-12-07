import React from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../context/context';

function ProtectedRoute({ element: Component, ...properties }) {
  const { isLogged } = properties;

  return isLogged ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...properties} />
  ) : (
    <Navigate to="/signin" replace />
  );
}

export { ProtectedRoute };

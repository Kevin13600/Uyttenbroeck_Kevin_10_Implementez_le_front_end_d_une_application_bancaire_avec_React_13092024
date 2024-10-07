import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth } from '../features/auth/authSlice';

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const { token, user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token && !user) {
      dispatch(checkAuth());
    }
  }, [dispatch, token, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (token || user) ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
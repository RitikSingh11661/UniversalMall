import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
  const isAuth=useSelector(store=>store.AuthReducer.isAuth);

  const location=useLocation();
  return !isAuth?<Navigate to='/login' state={location.pathname} replace/>:children;
}

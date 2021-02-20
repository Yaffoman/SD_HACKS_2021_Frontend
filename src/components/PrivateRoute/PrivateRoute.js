import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useAuth from '../Auth/Auth';
import Landing from '../../pages/Landing/Landing';

export default function PrivateRoute({ ...RouteProps }) {
  const { user } = useAuth();

  return (
    <>
    {
      user ? <Route {...RouteProps} /> : <Redirect to='/landing' />
    }
  </>)
}
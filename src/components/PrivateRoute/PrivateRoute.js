import React from 'React';
import { Route, Redirect } from "react-router-dom";
import useAuth from './components/Auth/Auth';
import Landing from '../../pages/Landing/Landing';

export default function PrivateRoute({ ...RouteProps }) {
  const user = useAuth();

  return (
    <>
    {
      user ? <Route {...RouteProps} /> : <Redirect to='/landing' />
    }
  </>)
}
import PropTypes from 'prop-types';

import { ContactList } from './contactList/ContactList';

import { Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Login from './login/login';
import Register from './login/register';
import Home from './home/home';
import PrivateRoute from './privateRoute/PrivateRoute';
import ProtectedRoute from './protectedRoute/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/reducers/auth/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <ProtectedRoute element={<Login />} redirect="/contactlist" />
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute element={<Register />} redirect="/contactlist" />
            }
          />
          <Route
            path="contactList"
            element={
              <PrivateRoute element={<ContactList />} redirect="/login" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

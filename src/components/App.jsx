import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import ContactsList from './Contacts/Contacts';
import { PublicRoute } from './Public/PublicRoute';
import Login from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Navigation } from './Navigation/Navigation';
import { PrivateRoute } from './Private/PrivateRoute';
import { refreshUserThunk } from '../redux/User/userThunk';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

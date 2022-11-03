import { Routes, Route } from 'react-router-dom';
import { LoginIn } from './page/LogIn/LoginIn';
import { SignIn } from 'components/page/SignIn/SignIn';
import { NavBar } from 'components/page/NavBar/NavBar';
import { UserInfo } from 'components/page/UserInfo/UserInfo';
import Phonebook from './page/Phonebook/Phonebook';
import AuthNavigation from './page/AuthNavigation/AuthNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from 'components/hook/PrivateRoute';
import { PublicRoute } from 'components/hook/PublicRoute';
import { useEffect } from 'react';
import { fetchCurrentUser } from './redux/auth/auth-operation';
import { fetchContacts } from './redux/contacts/contacts-operation';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [token, dispatch]);

  return (
    <>
      {/* // ! авторизация */}
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute restricted>
              <AuthNavigation />
            </PublicRoute>
          }
        >
          <Route index element={<LoginIn />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        {/* //! Залогинился */}
        <Route
          path="/auth"
          element={
            <PrivateRoute>
              <NavBar />
            </PrivateRoute>
          }
        >
          <Route index element={<UserInfo />} end />
          <Route path="phonebook" element={<Phonebook />} />
        </Route>
      </Routes>
    </>
  );
};

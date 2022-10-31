import { Routes, Route } from 'react-router-dom';
import { LoginIn } from './page/LogIn/LogIn';
import { SignIn } from 'components/page/SignIn/SignIn';
import { NavBar } from 'components/page/NavBar/NavBar';
import Phonebook from './page/Phonebook/Phonebook';
import Loyout from './page/Loyout/Loyout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<LoginIn />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="/nav" element={<NavBar />}>
          <Route path="phonebook" element={<Phonebook />} />
          <Route path="userInfo" element={<div>User info</div>} />
        </Route>
      </Routes>
    </>
  );
};

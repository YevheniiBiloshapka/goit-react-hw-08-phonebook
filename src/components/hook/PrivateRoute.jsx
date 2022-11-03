import { useSelector } from 'react-redux';
import { selectorToken } from 'components/redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(selectorToken);
  return token ? children : <Navigate to="/" />;
};

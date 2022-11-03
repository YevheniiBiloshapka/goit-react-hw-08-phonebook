import { useSelector } from 'react-redux';
import { selectorToken } from 'components/redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectorToken);
  const shouldRedirerct = token && restricted;
  return shouldRedirerct ? <Navigate to="/auth" /> : children;
};

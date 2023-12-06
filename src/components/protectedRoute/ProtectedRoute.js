import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component, redirect }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirect} /> : Component;
}

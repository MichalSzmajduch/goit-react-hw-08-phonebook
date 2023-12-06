import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { logout } from 'redux/reducers/auth/operations';

const AuthenticatedNav = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <button onClick={handleClick}>Logout</button>
      <Link to="contactlist">ContactList</Link>
    </>
  );
};
const UnuthenticatedNav = () => (
  <>
    <Link to="register">Register</Link>
    <Link to="login">Login</Link>
  </>
);
export default function Layout() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn ? <AuthenticatedNav /> : <UnuthenticatedNav />}
      </nav>
      <Outlet />
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import InfoUser from 'components/InfoUser/InfoUser';
import { selectToken, selectUser } from 'redux/constants';

import s from './navigation.module.css';

export const Navigation = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken) ?? '';

  return (
    <>
      <nav className={s.navbar}>
        <div className={s.container}>
          <Link to="/login" className={s.logo}>
            Phonebook
          </Link>
          {!user && (
            <ul className={s.links}>
              {token && (
                <li>
                  <Link to="/contacts" className={s.link}>
                    Contacts
                  </Link>
                </li>
              )}
              <li>
                <Link to="/signup" className={s.link}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" className={s.link}>
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
        <InfoUser />
      </nav>
      <div>
        {user ? (
          <h1>Welcome {user.name} to your contacts</h1>
        ) : (
          <h1>Welcome guest, please login</h1>
        )}
      </div>
    </>
  );
};

import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/User/userThunk';
import { selectUser } from '../../redux/constants';

import s from './InfoUser.module.css';
const InfoUser = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={s.container}>
      {user && (
        <div className={s.info}>
          <h4>HI, {user.name}</h4>
          <button className={s.btn} onClick={handleSubmit}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoUser;

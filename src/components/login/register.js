import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/reducers/auth/operations';

export default function Register() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: username,
        password,
        email,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <div>
            {' '}
            <h2>Name:</h2>
            <input
              type="text"
              name="username"
              value={username}
              onChange={e => setUserName(e.target.value)}
              required
            />{' '}
          </div>
          <div>
            {' '}
            <h2>Password:</h2>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />{' '}
          </div>
          <div>
            <h2>Email:</h2>
            <input
              type="text"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />{' '}
          </div>
        </label>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

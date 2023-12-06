import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/reducers/auth/operations';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      login({
        password,
        email,
      })
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        <div></div>
      </form>
    </div>
  );
}

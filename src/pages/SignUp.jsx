import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../redux/User/userThunk';

export const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        throw new Error();
    }
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    dispatch(signUpThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => alert('Please enter all input'));
  };

  return (
    <div>
      <label>User Name</label>
      <input
        onChange={handleChange}
        name="name"
        value={name}
        type="text"
        placeholder="Enter your name"
      />

      <label>Email address</label>
      <input
        onChange={handleChange}
        name="email"
        value={email}
        type="email"
        placeholder="Enter email"
      />

      <label>Password</label>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        value={password}
        placeholder="Password"
      />

      <button type="submit" onClick={handleOnSubmit}>
        Log in
      </button>
    </div>
  );
};

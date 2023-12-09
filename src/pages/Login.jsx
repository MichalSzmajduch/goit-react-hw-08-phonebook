const { useState } = require('react');
const { useDispatch } = require('react-redux');
const { loginThunk } = require('../redux/User/userThunk');
//import { loginThunk } from '../redux/User/userThunk';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
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

  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => alert('Please fill all fields'));
  };

  return (
    <div>
      <label>Email address</label>
      <input
        onChange={handleChange}
        name="email"
        value={email}
        type="email"
        placeholder="Enter email"
      />
      {/* <small>Enter your Login and Password or SignUp for free</small> */}

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

export default Login;

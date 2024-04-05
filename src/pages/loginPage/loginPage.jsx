import React, { useState } from 'react';
import './loginPage.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/authAction';
import { useAuthCheck } from '../../utils/hook/useAuthCheck';

import { Container } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Added state for "Remember Me"
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector(state => state.auth);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(email, password, rememberMe, navigate)); // Pass rememberMe to the login action
  };

  // Toggle "Remember Me" checkbox
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  useAuthCheck('/admin');

  return (
    <div>
      <Container>
        <h1>This is login Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            <input type="checkbox" checked={rememberMe} onChange={handleRememberMe} /> Remember Me
          </div>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;

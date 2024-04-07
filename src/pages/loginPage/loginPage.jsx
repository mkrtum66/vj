import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './loginPage.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/authAction';
import { useAuthCheck } from '../../utils/hook/useAuthCheck';

import { Container } from 'react-bootstrap';
import Loader from '../../components/loader';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Added state for "Remember Me"
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector(state => state.auth);

  const handleSubmit = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();
    dispatch(login(email, password, rememberMe, navigate)); // Pass rememberMe to the login action
  };

  // Toggle "Remember Me" checkbox
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  useAuthCheck('/admin');

  return (
    <div className="loginPage page-wrapper">
      <Container>
        <h1 className="text-center">Login</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              required
              aria-describedby="passwordHelpBlock"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters, numbers and uppercase,
              and must not contain spaces, special characters, or emoji.
            </Form.Text>
          </div>
          <div>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Remember Me"
              hecked={rememberMe.toString()}
              onChange={handleRememberMe}
            />
          </div>
          {loading && <Loader />}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button type="submit" className="mx-auto text-center d-flex justify-content-center">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;

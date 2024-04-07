import React from 'react';
import './adminPage.scss';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
    localStorage.removeItem('email');
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div>
      <Container>
        <h1>Hello From Admin!</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </Container>
    </div>
  );
};

export default AdminPage;

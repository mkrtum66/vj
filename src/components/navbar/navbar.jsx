import React, { useState } from 'react';
import './navbar.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logoWithName.png';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const clickOnLink = id => {
    setExpanded(false);
  };

  const scrollToTop = () => {
    navigate('/');
    setExpanded(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="navBar">
      <Navbar expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand onClick={scrollToTop}>
            <div className="logo">
              <img src={logo} alt="img" width={'auto'} height={'100%'} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            className="mobile-navbar-icon"
            aria-controls="navbarScroll"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={'/'} onClick={() => clickOnLink('')}>
                Home
              </NavLink>
              <NavLink to={'/contact-us'} onClick={() => clickOnLink('')}>
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

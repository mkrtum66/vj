import React from 'react';
import './showersPage.scss';
import { Container } from 'react-bootstrap';
import Title from '../../components/title';

const ShowersPage = () => {
  return (
    <div className="showerPage page-wrapper">
      <Container>
        <Title>Showers</Title>
      </Container>
    </div>
  );
};

export default ShowersPage;

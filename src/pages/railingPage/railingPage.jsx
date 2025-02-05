import React from 'react';
import './railingPage.scss';
import { Container } from 'react-bootstrap';
import Title from '../../components/title';

const RailingPage = () => {
  return (
    <div className="railingPage page-wrapper">
      <Container>
        <Title>Railings</Title>
      </Container>
    </div>
  );
};

export default RailingPage;

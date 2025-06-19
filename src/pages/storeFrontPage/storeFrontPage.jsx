import React from 'react';
import './storeFrontPage.scss';
import { Container } from 'react-bootstrap';
import Title from '../../components/title';

const StoreFrontPage = () => {
  return (
    <div className="storeFrontPage page-wrapper">
      <Container>
        <Title>Store Front </Title>
      </Container>
    </div>
  );
};

export default StoreFrontPage;

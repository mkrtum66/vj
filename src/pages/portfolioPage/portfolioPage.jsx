import React, { useState } from 'react';

import './portfolioPage.scss';

import { Container, Tab, Tabs } from 'react-bootstrap';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import SliderModal from '../../components/sliderModal';
import Title from '../../components/title';

const PortfolioPage = () => {
  const [key, setKey] = useState('home');
  const [clickedItem, setClickedItem] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);

  const handleShowSliderModal = index => {
    setClickedItem(index);
    setModalShow(true);
  };

  const items = Array.from({ length: 20 }).map((_, index) => (
    <div
      key={index}
      style={{
        height: index % 2 ? '200px' : '250px',
        background: '#' + Math.floor(Math.random() * 16777215).toString(16),
        margin: '10px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      onClick={() => handleShowSliderModal(index)}
    >
      Item {index}
    </div>
  ));

  return (
    <div className="portfolioPage page-wrapper">
      <Container>
        <Title>Portfolio</Title>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            Tab content for Home
            <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
              <Masonry>{items}</Masonry>
            </ResponsiveMasonry>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab content for Profile
            <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
              <Masonry>{items}</Masonry>
            </ResponsiveMasonry>
          </Tab>
        </Tabs>
        <SliderModal
          activeitem={clickedItem}
          items={items}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </div>
  );
};

export default PortfolioPage;

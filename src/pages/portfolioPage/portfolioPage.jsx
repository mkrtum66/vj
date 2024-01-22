import React, { useEffect, useState } from 'react';

import './portfolioPage.scss';

import { Container, Tab, Tabs } from 'react-bootstrap';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import SliderModal from '../../components/sliderModal';
import Title from '../../components/title';
import { useDispatch, useSelector } from 'react-redux';
import { getCommercialThunk } from '../../redux/thunks/getCommercialThunk';
import Loader from '../../components/loader';
import { getResidentialThunk } from '../../redux/thunks/getResidentialThunk';

const PortfolioPage = () => {
  const [key, setKey] = useState('residential');
  const [clickedItem, setClickedItem] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [modalItems, setModalItems] = useState([]);

  const isLoading = useSelector(state => state.loading.isLoading);
  const commerc = useSelector(state => state.commercial.commercial);
  const resident = useSelector(state => state.residential.residential);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommercialThunk());
    dispatch(getResidentialThunk());
  }, [dispatch]);

  useEffect(() => {
    setModalItems(resident);
  }, [resident]);

  const handleShowSliderModal = index => {
    setClickedItem(index);
    setModalShow(true);
  };

  const handleChangeTabs = k => {
    setKey(k);
    if (k === 'residential') {
      setModalItems(resident);
    } else {
      setModalItems(commerc);
    }
  };

  return (
    <div className="portfolioPage page-wrapper">
      <Container>
        <Title>Portfolio</Title>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => handleChangeTabs(k)}
          className="mb-3"
        >
          <Tab eventKey="residential" title="Residential">
            {!isLoading ? (
              <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
                <Masonry gutter="15px">
                  {resident.map(item => {
                    return (
                      <div key={item.id} className="masonry-img-wrapper">
                        <img
                          src={item.imgUrl}
                          alt="img"
                          className="img-fluid"
                          onClick={() => handleShowSliderModal(item.id)}
                        />
                      </div>
                    );
                  })}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <Loader />
            )}
          </Tab>
          <Tab eventKey="commercial" title="Commercial">
            {!isLoading ? (
              <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
                <Masonry gutter="15px">
                  {commerc.map(item => {
                    return (
                      <div key={item.id} className="masonry-img-wrapper">
                        <img
                          src={item.imgUrl}
                          alt="img"
                          className="img-fluid"
                          onClick={() => handleShowSliderModal(item.id)}
                        />
                      </div>
                    );
                  })}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <Loader />
            )}
          </Tab>
        </Tabs>
        <SliderModal
          activeitem={modalItems.findIndex(item => item.id === clickedItem)}
          items={modalItems}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </div>
  );
};

export default PortfolioPage;

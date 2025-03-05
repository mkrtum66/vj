import React, { useEffect, useState } from 'react';
import './railingPage.scss';
import { Container } from 'react-bootstrap';
import Title from '../../components/title';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Loader from '../../components/loader';
import SliderModal from '../../components/sliderModal';
import { useDispatch, useSelector } from 'react-redux';
import { getRailingsThunk } from '../../redux/thunks/getRailingsThunk';

const RailingPage = () => {
  const [clickedItem, setClickedItem] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [modalItems, setModalItems] = useState([]);
  const railings = useSelector(state => state.railings.railings);
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.loading.isLoading);

  useEffect(() => {
    dispatch(getRailingsThunk());
  }, [dispatch]);

  useEffect(() => {
    setModalItems(railings);
  }, [railings]);

  const handleShowSliderModal = index => {
    setClickedItem(index);
    setModalShow(true);
  };

  return (
    <div className="railingPage page-wrapper">
      <Container>
        <Title>Railings</Title>
        {!isLoading ? (
          <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
            <Masonry gutter="15px">
              {railings?.map(item => {
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

export default RailingPage;

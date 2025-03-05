import React, { useEffect, useState } from 'react';
import './slidingFoldingDoorsPage.scss';
import { Container } from 'react-bootstrap';
import Title from '../../components/title';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Loader from '../../components/loader';
import SliderModal from '../../components/sliderModal';
import { useDispatch, useSelector } from 'react-redux';
import { getSfDoorsThunk } from '../../redux/thunks/getSfDoorsThunk';

const SlidingFoldingDoorsPage = () => {
  const [clickedItem, setClickedItem] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [modalItems, setModalItems] = useState([]);
  const sfDoors = useSelector(state => state.sfDoors.sfDoors);
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.loading.isLoading);

  useEffect(() => {
    dispatch(getSfDoorsThunk());
  }, [dispatch]);

  useEffect(() => {
    setModalItems(sfDoors);
  }, [sfDoors]);

  const handleShowSliderModal = index => {
    setClickedItem(index);
    setModalShow(true);
  };

  return (
    <div className="slidingFoldingDoorsPage page-wrapper">
      <Container>
        <Title>Sliding & Folding Doors</Title>
        {!isLoading ? (
          <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
            <Masonry gutter="15px">
              {sfDoors?.map(item => {
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

export default SlidingFoldingDoorsPage;

import React, { useEffect, useState } from 'react';
import './entranceDoorPage.scss';
import { Container } from 'react-bootstrap';
import Title from '../../components/title';
import { useDispatch, useSelector } from 'react-redux';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Loader from '../../components/loader';
import SliderModal from '../../components/sliderModal';
import { getEntranceDoorsThunk } from '../../redux/thunks/getEntranceDoorsThunk';

const EntranceDoorPage = () => {
  const [clickedItem, setClickedItem] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [modalItems, setModalItems] = useState([]);
  const entranceDoors = useSelector(state => state.entranceDoors.entranceDoors);
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.loading.isLoading);

  useEffect(() => {
    dispatch(getEntranceDoorsThunk());
  }, [dispatch]);

  useEffect(() => {
    setModalItems(entranceDoors);
  }, [entranceDoors]);

  const handleShowSliderModal = index => {
    setClickedItem(index);
    setModalShow(true);
  };

  return (
    <div className="entranceDoorsPage page-wrapper">
      <Container>
        <Title>Entrance Doors</Title>
        {!isLoading ? (
          <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
            <Masonry gutter="15px">
              {entranceDoors?.map(item => {
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

export default EntranceDoorPage;

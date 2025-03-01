import React, { useEffect, useState } from 'react';
import './showersPage.scss';
import { Container } from 'react-bootstrap';
import Title from '../../components/title';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Loader from '../../components/loader';
import { useDispatch, useSelector } from 'react-redux';
import SliderModal from '../../components/sliderModal';
import { getShowersThunk } from '../../redux/thunks/getShowersThunk';

const ShowersPage = () => {
  const [clickedItem, setClickedItem] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [modalItems, setModalItems] = useState([]);
  const showers = useSelector(state => state.showers.showers);
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.loading.isLoading);

  useEffect(() => {
    dispatch(getShowersThunk());
  }, [dispatch]);

  useEffect(() => {
    setModalItems(showers);
  }, [showers]);

  const handleShowSliderModal = index => {
    setClickedItem(index);
    setModalShow(true);
  };

  return (
    <div className="showerPage page-wrapper">
      <Container>
        <Title>Showers</Title>
        {!isLoading ? (
          <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
            <Masonry gutter="15px">
              {showers?.map(item => {
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

export default ShowersPage;

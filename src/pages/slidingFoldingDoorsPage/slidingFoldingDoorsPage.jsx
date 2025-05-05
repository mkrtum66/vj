import React, { useEffect, useState } from 'react';
import './slidingFoldingDoorsPage.scss';
import { Container } from 'react-bootstrap';
import Title from '../../components/title';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Loader from '../../components/loader';
import SliderModal from '../../components/sliderModal';
import { useDispatch, useSelector } from 'react-redux';
import { getSfDoorsThunk } from '../../redux/thunks/getSfDoorsThunk';

import slidingImg from '../../assets/images/slidingFolding/WhatsApp Image 2025-01-09 at 17.36.19_edad8857.jpg';
import pocketImg from '../../assets/images/slidingFolding/pocket-door-inside-view.png';
import foldingImg from '../../assets/images/slidingFolding/folding-door-inside-view.png';

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
          <>
            <div>
              <p className="mb-5">
                At VJ Glass and Moldings Inc., we provide complete solutions to elevate the style,
                utility, and safety of your home. Our expertise includes everything from custom
                glass work to sophisticated door systems—designed to bring elegance, comfort, and
                value to your living space.
              </p>
              <div className="row mb-5">
                <div className="col-lg-5">
                  <div className="img-wrapper">
                    <img src={slidingImg} alt="img" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <h4 className="title">Sliding Doors</h4>
                  <div className="description">
                    <p>
                      Sliding doors glide horizontally along a track, making them an excellent
                      choice for maximizing natural light and space. Available in various styles and
                      configurations, these doors are perfect for patios, balconies, and modern
                      interiors. With options for integrated screens and multiple locking points,
                      our sliding doors offer security, convenience, and a sleek appearance. Made
                      with strong frames and energy-efficient glass, they combine performance and
                      beauty in every detail.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row flex-row-reverse">
                <div className="col-lg-5">
                  <div className="img-wrapper">
                    <img src={foldingImg} alt="img" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <h4 className="title">Folding Doors</h4>
                  <div className="description">
                    <p>
                      Folding doors, also known as bi-fold doors, are a stylish and space-saving
                      solution for wide openings. These doors consist of multiple panels that fold
                      and stack neatly to one or both sides, creating a seamless transition between
                      indoor and outdoor spaces. Made with double tempered low-E glass and durable
                      aluminum profiles, our folding doors offer excellent thermal insulation,
                      modern aesthetics, and easy operation. Ideal for patios, living rooms, and
                      commercial spaces, they open outward for maximum space efficiency and a
                      panoramic view.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-lg-5">
                  <div className="img-wrapper">
                    <img src={pocketImg} alt="img" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <h4 className="title">Pocket Doors</h4>
                  <div className="description">
                    <p>
                      Pocket doors slide into a hidden compartment within the wall, offering a
                      clean, modern look without taking up floor space. Our pocket door systems
                      feature high-track hardware, retractable screens, and double tempered low-E
                      glass for energy efficiency and sound insulation. This design is perfect for
                      areas where space is limited, such as bathrooms, bedrooms, or minimalist
                      interiors. With smooth operation and concealed framing, pocket doors provide
                      both functionality and elegance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
          </>
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

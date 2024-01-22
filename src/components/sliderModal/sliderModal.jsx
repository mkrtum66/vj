import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './sliderModal.scss';

const SliderModal = props => {
  return (
    <div className="SliderModal">
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <Swiper
            initialSlide={props.activeitem}
            navigation={true}
            loop={true}
            autoHeight={true}
            centeredSlides={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {props.items.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="m-auto">
                    <img src={item.imgUrl} alt="img" className="img-fluid" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SliderModal;

import React from 'react';
import './servicesPage.scss';
import { Container } from 'react-bootstrap';
import { services } from '../../components/service/mock';

const ServicesPage = () => {
  return (
    <div className="servicesPage page-wrapper">
      <Container>
        {services.map(item => {
          return (
            <div
              className={`row mb-5 align-items-center ${
                services.indexOf(item) % 2 ? 'flex-row-reverse' : ''
              }`}
              key={item.id}
            >
              <div className="col-lg-5 mb-3">
                <div className="img-wrapper">
                  <img src={item.imgUrl} alt="img" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-7">
                <h4 className="title">{item.title}</h4>
                <p className="description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default ServicesPage;

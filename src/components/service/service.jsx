import React from 'react';
import './service.scss';
import { NavLink } from 'react-router-dom';

const Service = props => {
  return (
    <div className="service">
      <div className="service-icon mb-4">
        <img src={props.imgUrl} alt="img" />
      </div>
      <div className="service-title">
        <p>{props.title}</p>
      </div>
      <p className="service-description">{props.description}</p>
      <NavLink className="read-more-btn" to="services">
        Read More
      </NavLink>
    </div>
  );
};

export default Service;

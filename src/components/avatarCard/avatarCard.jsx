import React from 'react';
import './avatarCard.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import userImg from '../../assets/images/unknown-user.png';

const AvatarCard = props => {
  return (
    <div className="avatar" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
      <div className="img-wrapper">
        {props.loading ? (
          <Skeleton height={'100%'} borderRadius={'5px 5px 0 0'} style={{ top: '-4px' }} />
        ) : (
          <img
            src={!!props.imgUrl.length ? props.imgUrl : userImg}
            alt="img"
            className="img-fluid"
          />
        )}
      </div>
      <div className="member-info">
        <p className="full-name">
          {props.loading ? <Skeleton /> : `${props.firstName} ${props.lastName}`}
        </p>
        <p className="position">{props.loading ? <Skeleton /> : `${props.position}`}</p>
      </div>
    </div>
  );
};

export default AvatarCard;

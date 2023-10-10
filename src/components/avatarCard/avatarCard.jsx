import React from 'react';
import './avatarCard.scss';

const AvatarCard = props => {
  return (
    <div className="avatar">
      <div className="img-wrapper">
        <img src={props.imgUrl} alt="img" className="img-fluid" />
      </div>
      <div className="member-info">
        <p className="full-name">{props.person}</p>
        <p className="position">{props.personPosition}</p>
      </div>
    </div>
  );
};

export default AvatarCard;

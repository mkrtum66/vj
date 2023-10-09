import React from 'react';
import './title.scss';

const Title = props => {
  return (
    <div className="title-wrapper">
      <p>{props.children}</p>
    </div>
  );
};

export default Title;

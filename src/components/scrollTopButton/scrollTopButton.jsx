import React, { useState } from 'react';
import './scrollTopButton.scss';

import icon from '../../assets/icons/up-chevron.png';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div onClick={scrollToTop} className={`scrollTopBtn ${visible && 'active'}`}>
      <img src={icon} alt="img" className="img-fluid" />
    </div>
  );
};

export default ScrollTopButton;

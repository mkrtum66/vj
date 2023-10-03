import React from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logoWithName.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import location from '../../assets/icons/location-tf.png';
import mail from '../../assets/icons/mail-tf.png';
import phone from '../../assets/icons/phone-call-tf.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="container">
          <div className="row justify-content-between align-items-center gap-4">
            <div className="col-md-4">
              <div className="footer-info">
                <p className="contact-info">
                  <a
                    href="https://maps.apple.com/?address=911%20W%20Magnolia%20Blvd,%20Burbank,%20CA%20%2091506,%20United%20States&ll=34.177579,-118.319119&q=911%20W%20Magnolia%20Blvd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LazyLoadImage src={location} alt="img" width={'20px'} height={'auto'} />
                    <span>911 W Magnolia Blvd, Burbank, CA 91506</span>
                  </a>
                </p>
                <p className="contact-info">
                  <a href="tel:+18183717271">
                    <LazyLoadImage src={phone} alt="img" width={'20px'} height={'auto'} />
                    <span>+1 (818) 371-7271</span>
                  </a>
                </p>
                <p className="contact-info">
                  <a href="mailto:vjglassmirrors@yahoo.com">
                    <LazyLoadImage src={mail} alt="img" width={'20px'} height={'auto'} />
                    <span>vjglassmirrors@yahoo.com</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 footer-links">
              <ul>
                <li>
                  <NavLink to={'/faq'}>FAQ</NavLink>
                </li>
                <li>
                  <NavLink to={'/blog'}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to={'/accessibility'}>Accessibility Statement</NavLink>
                </li>
                <li>
                  <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <LazyLoadImage
                src={logo}
                alt="img"
                className="img-fluid footer-logo"
                width={'100%'}
                height={'auto'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="container">
          <div className="copyright">
            © Copyright{' '}
            <strong>
              <span>VJ Glass & Mirrors</span>
            </strong>
            . All Rights Reserved.
          </div>
          <div className="credits">
            Powered by <a href="https://www.linkedin.com/in/mkrtum-abrahamyan/">M. A.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

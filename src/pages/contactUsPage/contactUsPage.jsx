import React from 'react';
import './contactUsPage.scss';
import { Container } from 'react-bootstrap';
import Title from '../../components/title';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import location from '../../assets/icons/location-tf.png';
import phone from '../../assets/icons/phone-call-tf.png';
import mail from '../../assets/icons/mail-tf.png';

const ContactUsPage = () => {
  return (
    <div className="contactUsPage page-wrapper">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <Title>Contact Us</Title>
            <p className="mb-4">
              If you're ready to enhance your space with the beauty of glass and mirrors, VJ Glass &
              Mirrors is here to assist you. Get in touch with us today to discuss your project,
              request a quote, or simply learn more about our services. We look forward to turning
              your vision into a reality.
            </p>
            <div className="visit-us mb-4">
              <p className="mb-1">
                <b>Visit Us:</b>
              </p>
              <p>
                If you prefer face-to-face discussions or need to see our products and services in
                person, we welcome you to visit our showroom. Our friendly team will be on hand to
                guide you through our offerings and answer any questions you may have.
              </p>
            </div>
            <div className="contact-info-wrapper mb-3">
              <p className="mb-2">
                <b>Contact Information:</b>
              </p>
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
          <div className="col-md-6">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.785563497539!2d-118.3210747239417!3d34.17739981111066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2955c21024ce1%3A0xcb26da12e8b39063!2s911%20W%20Magnolia%20Blvd%2C%20Burbank%2C%20CA%2091506!5e0!3m2!1sen!2sus!4v1696889210977!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsPage;

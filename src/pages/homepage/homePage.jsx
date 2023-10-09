import React, { useEffect } from 'react';
import './homePage.scss';
import { Container } from 'react-bootstrap';
import { scrollToSection } from '../../utils/scrollToSection';
import Title from '../../components/title';

const HomePage = ({ myRef }) => {
  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  return (
    <div className="homepage page-wrapper">
      <Container>
        <section id="welcome" className="section-wrapper">
          <h2>Welcome to VJ Glass & Mirrors - Your Source for Stunning Glass and Mirrors</h2>
          <p>
            We're dedicated to bringing beauty and elegance into your life through the artistry of
            glass and mirrors. Whether you're looking to enhance the aesthetics of your home,
            office, or any other space, we're here to make your vision a reality.
          </p>
        </section>
        <section id="ourCompany" className="section-wrapper">
          <Title>Our Company</Title>
          <div className="row">
            <div className="col-md-7">
              <p>
                With years of experience in the industry, we have mastered the craft of working with
                glass and mirrors. From custom-cut glass tabletops to breathtaking mirrored walls,
                our skilled artisans and technicians are equipped to tackle projects of all sizes
                and complexities. We take pride in our attention to detail and commitment to
                quality, ensuring that every piece we create is not only functional but also a work
                of art.
              </p>
            </div>
            <div className="col-md-5">
              <img src={''} alt="img" className="img-fluid" />
            </div>
          </div>
        </section>
        <section id="team" className="section-wrapper">
          <Title>Our Team</Title>
        </section>
        <section id="partners" className="section-wrapper">
          <Title>Partners</Title>
        </section>
        <section id="services" className="section-wrapper">
          <Title>Services</Title>
          <p>
            <b>Custom Glass Cutting:</b> We offer precision glass cutting services to fit your
            unique needs. From windows and doors to shelving and display cases, we provide
            high-quality, customized glass solutions. <b>Mirror Installation:</b> Our mirror
            installation services can transform any space. Whether you're aiming for a contemporary,
            classic, or minimalist look, our mirrors can help you achieve the desired ambiance.
            <b>Glass Repairs:</b> Accidents happen, and when they do, we're here to help. We offer
            prompt and efficient glass repair services to restore the safety and aesthetics of your
            property. <b>Frameless Shower Enclosures:</b> Elevate your bathroom with our exquisite
            frameless shower enclosures. They not only add a touch of luxury but also create a sense
            of spaciousness. <b>Glass and Mirror Design:</b> Our team of experts can help you design
            and customize glass and mirror solutions that perfectly complement your space. We're
            here to turn your ideas into reality.
          </p>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;

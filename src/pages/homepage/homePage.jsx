import React, { useEffect } from 'react';
import './homePage.scss';
import { Container } from 'react-bootstrap';
import { scrollToSection } from '../../utils/scrollToSection';

const HomePage = ({ myRef }) => {
  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  return (
    <div className="homepage page-wrapper">
      <Container>
        <h1>Home Page</h1>
        <section id="ourCompany" className="section-wrapper">
          <h1>Our Company</h1>
        </section>
        <section id="team" className="section-wrapper">
          <h1>Our Team</h1>
        </section>
        <section id="partners" className="section-wrapper">
          <h1>Partners</h1>
        </section>
        <section id="services" className="section-wrapper">
          <h1>Services</h1>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;

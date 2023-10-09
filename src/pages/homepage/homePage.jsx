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
        <section id="ourCompany" className="section-wrapper">
          <Title>Our Company</Title>
        </section>
        <section id="team" className="section-wrapper">
          <Title>Our Team</Title>
        </section>
        <section id="partners" className="section-wrapper">
          <Title>Partners</Title>
        </section>
        <section id="services" className="section-wrapper">
          <Title>Services</Title>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;

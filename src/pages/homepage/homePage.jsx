import React, { useEffect } from 'react';
import './homePage.scss';
import { Container } from 'react-bootstrap';
import { scrollToSection } from '../../utils/scrollToSection';
import Title from '../../components/title';

import check from '../../assets/icons/double-check.png';
import ourCompany from '../../assets/images/file-1.png';
// import Team from '../../components/team';
import Service from '../../components/service/service';
import { services } from '../../components/service/mock';

const HomePage = ({ myRef }) => {
  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  return (
    <div className="homepage">
      <section id="welcome" className="section-wrapper">
        <Container>
          <div className="center-text">
            <h1>VJ Glass & Moldings Inc.</h1>
            <h2>Your Source for Stunning Glass and Moldings</h2>
            <p>
              We're dedicated to bringing beauty and elegance into your life <br /> through the
              artistry of glass and mirrors.
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <section id="ourCompany" className="section-wrapper">
          <Title>Our Company</Title>
          <div className="row">
            <div className="col-md-7">
              <p>
                With years of experience in the industry, we have mastered the craft of working with
                glass and mirrors. From custom-cut glass tabletops to breathtaking mirrored walls,
                our skilled artisans and technicians are equipped to tackle projects of all sizes
                and complexities.
              </p>
              <ul className="company-list">
                <li>
                  <div className="d-flex">
                    <img src={check} alt="img" />
                    <p>
                      <b>Customization:</b> We believe in the power of individuality. Our custom
                      glass and mirror solutions are tailored to suit your unique preferences,
                      space, and design aspirations.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <img src={check} alt="img" />
                    <p>
                      <b>Quality Assurance:</b> We source the highest-quality materials to ensure
                      the longevity and performance of our products.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <img src={check} alt="img" />
                    <p>
                      <b>Innovation:</b> We stay at the forefront of industry trends and technology
                      to provide cutting-edge solutions that inspire.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <img src={check} alt="img" />
                    <p>
                      <b>Customer-Centric Approach:</b> Your satisfaction is our top priority. We
                      work closely with you, offering guidance and expertise to bring your vision to
                      life.
                    </p>
                  </div>
                </li>
              </ul>
              <p>
                We take immense pride in the expertise of our artisans and technicians. Every glass
                panel, mirror, or project we undertake reflects the dedication and precision that
                are at the heart of our work. With each project, we aim not only to meet but to
                exceed our clients' expectations.
              </p>
            </div>
            <div className="col-md-5 img-fluid img-place">
              <img src={ourCompany} alt="img" className="img-fluid" />
            </div>
          </div>
        </section>
        {/*<section id="team" className="section-wrapper">*/}
        {/*  <Title>Our Team</Title>*/}
        {/*  <Team />*/}
        {/*</section>*/}
        {/*<section id="partners" className="section-wrapper">*/}
        {/*  <Title>Partners</Title>*/}
        {/*</section>*/}
        <section id="services" className="section-wrapper">
          <Title>Our Services</Title>
          <div className="row">
            {services.map(item => {
              return (
                <div key={item.id} className="col-lg-4 col-md-6 col-12 mb-4">
                  <Service imgUrl={item.icon} title={item.title} description={item.description} />
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;

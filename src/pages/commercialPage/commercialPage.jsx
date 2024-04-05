import React, { useEffect } from 'react';
import './commercialPage.scss';

import { Container } from 'react-bootstrap';
import Loader from '../../components/loader';
import Title from '../../components/title';
import { useDispatch, useSelector } from 'react-redux';
import { getCommercialThunk } from '../../redux/thunks/getCommercialThunk';

const CommercialPage = () => {
  const isLoading = useSelector(state => state.loading.isLoading);
  const commerc = useSelector(state => state.commercial.commercial);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommercialThunk());
  }, [dispatch]);

  return (
    <div className="commercialPage page-wrapper">
      {!isLoading ? (
        <Container>
          <Title>Commercial</Title>
          <p className="mb-5">
            At VJ Glass and Moldings Inc., we understand the impact that a well-designed and
            functional commercial space can have on your business. We specialize in a wide range of
            solutions to enhance the aesthetics, functionality, and security of your commercial
            building. From striking glass installations to elegant doors and storefronts, we're here
            to transform your space into a hub of professionalism and success.
          </p>
          <div className="row mb-5">
            <div className="col-lg-5">
              <div className="img-wrapper">
                <img src={commerc[0]?.imgUrl} alt="img" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7">
              <h4 className="title">Our Commercial Solutions</h4>
              <div className="description">
                <ul>
                  <li>
                    <span>Glass Installations:</span>Elevate the visual appeal and functionality of
                    your commercial space with our custom glass solutions. From glass partitions to
                    decorative glass art, we craft designs that reflect your brand's identity and
                    create a lasting impression on your clients and visitors.
                  </li>
                  <li>
                    <span>Moldings:</span> Our glass moldings provide a finishing touch to your
                    glass installations, enhancing both aesthetics and protection. These moldings
                    are designed to reduce the risk of damage to your glass and add a touch of
                    elegance to your commercial space.
                  </li>
                  <li>
                    <span>Shower Doors:</span> Our commercial-grade shower doors provide an upscale
                    experience for clients in spas, gyms, and other establishments. We offer a
                    variety of designs, from sleek frameless enclosures to space-saving sliding
                    doors.
                  </li>
                  <li>
                    <span>Windows:</span> Enhance your commercial building's energy efficiency and
                    appeal with our top-quality window installation and replacement services. We
                    provide guidance on choosing windows that meet your needs and budget, and our
                    professional installation ensures a secure and energy-efficient fit.
                  </li>
                  <li>
                    <span>Storefronts:</span> Create a striking first impression with our
                    captivating storefront solutions. We specialize in designing and installing
                    storefronts that reflect your brand's message, increase visibility, and enhance
                    security.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse">
            <div className="col-lg-5">
              <div className="img-wrapper">
                <img src={commerc[1]?.imgUrl} alt="img" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7">
              <h4 className="title">Why Choose Us for Your Commercial Building?</h4>
              <div className="description">
                <ul>
                  <li>
                    <span>Experience:</span> With years of experience, our team has a deep
                    understanding of the nuances of creating effective commercial solutions.
                  </li>
                  <li>
                    <span>Customization:</span> We offer tailored solutions to align with your brand
                    and meet the specific requirements of your commercial space.
                  </li>
                  <li>
                    <span>Quality Materials:</span> We use high-quality materials that ensure the
                    longevity, functionality, and visual appeal of our installations.
                  </li>
                  <li>
                    <span>Customer Satisfaction:</span> Your success is our priority, and we aim to
                    exceed your expectations by delivering results that enhance your business.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*<img src={data[0].imgUrl} alt="img" className="img-fluid" />*/}
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CommercialPage;

import React, { useEffect } from 'react';
import './residentialPage.scss';

import { Container } from 'react-bootstrap';
import Loader from '../../components/loader';
import Title from '../../components/title';
import { useDispatch, useSelector } from 'react-redux';
import { getResidentialThunk } from '../../redux/thunks/getResidentialThunk';

const ResidentialPage = () => {
  const isLoading = useSelector(state => state.loading.isLoading);
  const resident = useSelector(state => state.residential.residential);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResidentialThunk());
  }, [dispatch]);

  console.log(resident);

  return (
    <div className="residentialPage page-wrapper">
      {!isLoading ? (
        <Container>
          <Title>Residential</Title>
          <p className="mb-5">
            At VJ Glass and Moldings Inc., we are your one-stop destination for enhancing the
            beauty, functionality, and security of your residential building. We specialize in a
            range of solutions, from stunning glass installations to elegant doors, all tailored to
            transform your living space into a place of luxury and comfort.
          </p>
          <div className="row mb-5">
            <div className="col-lg-5">
              <div className="img-wrapper">
                <img src={resident[0]?.imgUrl} alt="img" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7">
              <h4 className="title">Our Residential Solutions</h4>
              <div className="description">
                <ul>
                  <li>
                    <span>Glass Installations:</span> We offer a wide array of custom glass
                    solutions, from sleek glass railings and mirrors to decorative glass art and
                    custom glass moldings. Our team collaborates with you to create breathtaking
                    glass designs that align with your style and elevate your space.
                  </li>
                  <li>
                    <span>Shower Doors:</span> Transform your bathroom into a spa-like oasis with
                    our exquisite shower doors. We provide a range of designs, from frameless
                    enclosures to sliding doors, adding both functionality and elegance to your
                    daily routine.
                  </li>
                  <li>
                    <span>Windows:</span> Enhance your home's energy efficiency, security, and curb
                    appeal with our high-quality window installation and replacement services. We
                    guide you through choosing the perfect windows that match your style and needs,
                    and our professional installation ensures a secure fit.
                  </li>
                  <li>
                    <span>Patio Doors:</span> Create a seamless connection between your indoor and
                    outdoor living spaces with our patio door solutions. Our doors are not just
                    functional but also energy-efficient, enhancing the aesthetics and comfort of
                    your home.
                  </li>
                  <li>
                    <span>Closet Solutions:</span> Maximize your storage space with our custom
                    closet solutions. We offer sliding mirror closet doors and other stylish options
                    that help you keep your space organized and visually appealing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse">
            <div className="col-lg-5">
              <div className="img-wrapper">
                <img src={resident[1]?.imgUrl} alt="img" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7">
              <h4 className="title">Why Choose Us for Your Residential Building?</h4>
              <div className="description">
                <ul>
                  <li>
                    <span>Expertise:</span> With years of experience, our team is equipped with the
                    knowledge and skills to handle various residential projects.
                  </li>
                  <li>
                    <span>Customization:</span> We empower you to personalize your installations to
                    match your style and specific residential requirements.
                  </li>
                  <li>
                    <span>Quality Materials:</span> We use top-grade materials that ensure the
                    durability and longevity of our installations.
                  </li>
                  <li>
                    <span>Customer Satisfaction:</span> Your satisfaction is our ultimate goal, and
                    we stand by our work, aiming to exceed your expectations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ResidentialPage;

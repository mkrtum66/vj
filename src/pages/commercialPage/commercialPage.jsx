import React, { useEffect, useState } from 'react';
import './commercialPage.scss';

import { Container } from 'react-bootstrap';
import { fetchData } from '../../utils/api';
import Loader from '../../components/loader';

const CommercialPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([{ imgUrl: '' }]);

  useEffect(() => {
    fetchData('projects').then(response => {
      setData(response);
    });
    setIsLoading(false);
  }, []);

  console.log(data);

  return (
    <div className="commercialPage page-wrapper">
      {!isLoading ? (
        <Container>
          <h1>commercialPage</h1>
          <img src={data[0].imgUrl} alt="img" className="img-fluid" />
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CommercialPage;

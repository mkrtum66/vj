import React, { useEffect, useState } from 'react';
import './residentialPage.scss';

import { Container } from 'react-bootstrap';
import { fetchData } from '../../utils/api';
import Loader from '../../components/loader';

const ResidentialPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([{ imgUrl: '' }]);

  useEffect(() => {
    fetchData('residential').then(response => {
      setData(response);
    });
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  console.log(data);

  return (
    <div className="residentialPage page-wrapper">
      {!isLoading ? (
        <Container>
          <h1>residentialPage</h1>
          <img src={data[0].imgUrl} alt="img" className="img-fluid" />
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ResidentialPage;

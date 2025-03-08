import React, { useEffect, useState } from 'react';
import './adminPage.scss';
import { Container, Form, Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { uploadImage } from '../../redux/actions/imageUploadAction';
import Loader from '../../components/loader';
import { delImage } from '../../redux/actions/imageDeleteAction';
import { getCommercialThunk } from '../../redux/thunks/getCommercialThunk';
import { getResidentialThunk } from '../../redux/thunks/getResidentialThunk';
import Title from '../../components/title';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ConfirmModal from '../../components/confirmModal';

import deleteImg from '../../assets/icons/bin.png';

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const { uploadLoading, imageUrl, uploadError } = useSelector(state => state.uploadImage);
  const { deleteLoading, deleteError } = useSelector(state => state.deleteImage);

  const [key, setKey] = useState('residential');
  const [uploadImagePlace, setUploadImagePlace] = useState('residential');
  const [clickedItem, setClickedItem] = useState('');
  const [clickedItemName, setClickedItemName] = useState('');
  const [modalShow, setModalShow] = React.useState(false);

  const isLoading = useSelector(state => state.loading.isLoading);
  const commerc = useSelector(state => state.commercial.commercial);
  const resident = useSelector(state => state.residential.residential);

  const handleDelete = () => {
    dispatch(delImage(clickedItemName, key, clickedItem));
  };

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    dispatch(uploadImage(selectedFile, uploadImagePlace));
  };

  const handleLogout = () => {
    dispatch(logout(navigate));
    localStorage.removeItem('email');
    localStorage.removeItem('isLoggedIn');
  };

  useEffect(() => {
    dispatch(getCommercialThunk());
    dispatch(getResidentialThunk());
  }, [dispatch]);

  const handleShowSliderModal = (id, name) => {
    setClickedItem(id);
    setClickedItemName(name);
    setModalShow(true);
  };

  return (
    <div className="page-wrapper adminPage">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <Title>Admin Page</Title>
          <Button onClick={handleLogout}>Logout</Button>
        </div>

        <div className="upload-form">
          <Form.Group
            controlId="formFile"
            className="mb-3 d-flex flex-column align-items-start gap-3"
          >
            <div>
              <Form.Select
                aria-label="Image Place"
                value={uploadImagePlace}
                onChange={event => setUploadImagePlace(event.target.value)}
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </Form.Select>
            </div>
            <div>
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </div>
            <Button onClick={handleUpload} disabled={uploadLoading}>
              Upload Image
            </Button>
          </Form.Group>
          {uploadLoading && <Loader />}
          {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
          {imageUrl && (
            <p>
              Image uploaded successfully: <a href={imageUrl}>View Image</a>
            </p>
          )}
        </div>
        {/*<div>*/}
        {/*  <h2>Delete Image</h2>*/}
        {/*  <button onClick={handleDelete} disabled={deleteLoading}>*/}
        {/*    Delete Image*/}
        {/*  </button>*/}
        {/*  {deleteError && <p style={{ color: 'red' }}>{deleteError}</p>}*/}
        {/*</div>*/}

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="residential" title="Residential">
            {!isLoading ? (
              <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
                <Masonry gutter="15px">
                  {resident.map(item => {
                    return (
                      <div key={item.id} className="masonry-img-wrapper">
                        <img src={item.imgUrl} alt={item.name} className="img-fluid" />
                        <div
                          className="delete-btn-wrapper"
                          onClick={() => handleShowSliderModal(item.id, item.name)}
                        >
                          <img src={deleteImg} alt="img" className="img-fluid" />
                        </div>
                      </div>
                    );
                  })}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <Loader />
            )}
          </Tab>
          <Tab eventKey="commercial" title="Commercial">
            {!isLoading ? (
              <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
                <Masonry gutter="15px">
                  {commerc.map(item => {
                    return (
                      <div key={item.id} className="masonry-img-wrapper">
                        <img src={item.imgUrl} alt="img" className="img-fluid" />
                        <div
                          className="delete-btn-wrapper"
                          onClick={() => handleShowSliderModal(item.id, item.name)}
                        >
                          <img src={deleteImg} alt="img" className="img-fluid" />
                        </div>
                      </div>
                    );
                  })}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <Loader />
            )}
          </Tab>
        </Tabs>
        <ConfirmModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          handleDelete={() => handleDelete()}
          disabled={deleteLoading}
          deleteError={deleteError}
        />
      </Container>
    </div>
  );
};

export default AdminPage;

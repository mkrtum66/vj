import React from 'react';
import './confirmModal.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ConfirmModal = props => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure, you want to delete this image?</h4>
        {/*<p>*/}
        {/*  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis*/}
        {/*  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.*/}
        {/*</p>*/}
        {props.deleteError && <p style={{ color: 'red' }}>{props.deleteError}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'danger'} onClick={props.handleDelete} disabled={props.disabled}>
          Confirm
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;

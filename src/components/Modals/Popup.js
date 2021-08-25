import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useClothesStore } from '../../Mobx/ClothesContext';
import { useHistory } from 'react-router-dom';

import './Popup.scss';
import { useObserver } from 'mobx-react';

const Popup = ({ show, setShow, setSelectedItem, selectedItem }) => {
  const history = useHistory();
  const { addItem } = useClothesStore();
  const handleClose = () => {
    setSelectedItem('');
    setShow(false);
  };
  const handleAddItem = () => {
    addItem(selectedItem);
    history.push('/');
  };
  return useObserver(() => (
    <Modal
      className='modal-container'
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Do you want to add this item to your list?</Modal.Title>
      </Modal.Header>
      <Modal.Body className='justify-content-center'>
        <p className='text-secondary'>YOUR SELECTED ITEM IS:</p>

        <div className='modal-body'>
          <p>
            <span>name:</span> {selectedItem.name}
          </p>
          <p>
            <span>brand:</span> {selectedItem.brand}
          </p>
          <p>
            <span>color:</span>
            {selectedItem.color}
          </p>
          <p>
            <span>size:</span> {selectedItem.size}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className='justify-content-center'>
        <Button
          onClick={handleAddItem}
          className='modal-body-btn'
          variant='success'
        >
          Yes!
        </Button>
        <Button
          onClick={handleClose}
          className='modal-body-btn'
          variant='danger'
        >
          No
        </Button>
      </Modal.Footer>
    </Modal>
  ));
};

export default Popup;

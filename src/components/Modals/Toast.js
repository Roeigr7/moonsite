import { useObserver } from 'mobx-react';
import React from 'react';
import { BagCheckFill } from 'react-bootstrap-icons';
import { Toast as BtsToast } from 'react-bootstrap';
import { useClothesStore } from '../../Mobx/ClothesContext';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Toast = () => {
  const { props, closeToast } = useClothesStore();
  return useObserver(() => (
    <ToastContainer
      style={{
        maxWidth: '90%',
        position: 'absolute',
        top: '10px',
        zIndex: '99999',
        right: '10px',
      }}
    >
      <BtsToast
        animation={true}
        bg={'success'}
        autohide
        delay={2000}
        onClose={() => closeToast()}
        show={props.toast}
      >
        <BtsToast.Header>
          <h6 className='me-auto'>
            <BagCheckFill size={30} /> Successful
          </h6>
        </BtsToast.Header>
        <BtsToast.Body className='text-light'>
          Youre clothes was added !
        </BtsToast.Body>
      </BtsToast>
    </ToastContainer>
  ));
};
export default Toast;

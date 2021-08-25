import React from 'react';
import { Spinner as BtsSpinner } from 'react-bootstrap';
const Loader = () => {
  return (
    <div
      style={{
        minWidth: '100%',
        minHeight: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BtsSpinner
        style={{ width: '100px', height: '100px' }}
        variant='primary'
        animation='grow'
        role='status'
      ></BtsSpinner>
    </div>
  );
};
export default Loader;

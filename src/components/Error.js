import React from 'react';

const Error = ({ error }) => {
  return (
    <div>
      <h1 className='text-center text-danger'>Error</h1>
      <h2 className='text-center text-danger'>{error}</h2>
    </div>
  );
};
export default Error;

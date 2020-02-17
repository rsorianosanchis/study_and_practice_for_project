import React from 'react';

const Error = ({ msg }) => {
  return (
    <div className='alert alert-warning text-center p-2'>
      <strong>{msg}</strong> You should check in on some of those fields below.
      <button
        type='button'
        className='close'
        data-dismiss='alert'
        aria-label='Close'
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};
export default Error;

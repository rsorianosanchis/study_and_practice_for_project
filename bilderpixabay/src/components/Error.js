import React from 'react';

const Error = ({ msg }) => {
  return (
    <div className='alert alert-dismissible alert-danger'>
      <button type='button' className='close' data-dismiss='alert'>
        &times;
      </button>
      <h4 className='alert-heading'>Warning!</h4>
      <p className='mb-0'>{msg}</p>
    </div>
  );
};

export default Error;

import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ errorData }) => {
  const { cod, message } = errorData;
  return (
    <div className="alert alert-danger mt-4" role="alert">
      {cod} {message}
    </div>
  )
}

Error.propTypes = { errorData: PropTypes.object.isRequired }

export default Error;

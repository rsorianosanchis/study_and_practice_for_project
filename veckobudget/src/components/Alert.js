import React from 'react';
import PropTypes from 'prop-types';


const Alert = ({ msg }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {msg}
    </div>
  )
}

Alert.propTypes = {
  msg: PropTypes.string.isRequired
}
export default Alert;

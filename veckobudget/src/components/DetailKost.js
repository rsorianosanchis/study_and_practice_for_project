import React from 'react';
import PropTypes from 'prop-types';

const DetailKost = ({ item }) => {
  const { id, koncept, pris } = item;
  return (
    <div className="card border-dark mb-3" style={{ maxwidth: '18rem' }}>
      <div className="card-header">{pris}</div>
      <div className="card-body text-dark">
        <h5 className="card-title">{koncept}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div >
  )
}

DetailKost.propTypes = {
  item: PropTypes.object.isRequired
}

export default DetailKost;

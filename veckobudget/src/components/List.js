import React from 'react';
import DetailKost from './DetailKost';
import PropTypes from 'prop-types';

const List = ({ kostnader }) => {
  return (
    <div className='Gjort Kostnader'>
      {kostnader.map(item => <DetailKost item={item} key={item.id} />)}
    </div>
  )
}

List.propTypes = {
  kostnader: PropTypes.array.isRequired
}

export default List;

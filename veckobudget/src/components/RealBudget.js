import React from 'react';
import { kontrolAvailable } from '../helpers';
import PropTypes from 'prop-types';

const RealBudget = ({ budget, available }) => {

  return (
    <div className='bg-info'>
      <div className="alert alert-light mx-3 mt-2 mb-1" role="alert" >
        <strong>Budget: </strong>{budget} Kronor
      </div>
      <div className={kontrolAvailable(budget, available)} role="alert">
        <strong>Available amount: </strong>{available} Kronor
      </div>
    </div>
  )
}
RealBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  available: PropTypes.number.isRequired
}
export default RealBudget;



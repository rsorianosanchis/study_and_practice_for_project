import React, { Fragment, useState, useEffect } from 'react';
import Alert from './Alert';
import PropTypes from 'prop-types';

const Formul = ({ setBudget, setAvailable }) => {

  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const handleInput = e => {
    console.log(e.target.value);
    console.log(parseInt(e.target.value));
    setAmount(parseInt(e.target.value, 10))
  };

  const addBudget = e => {
    e.preventDefault();
    console.log('enter budget');
    //validation input
    if (amount < 1 || isNaN(amount)) {
      setError(true)
      return;
    }
    setError(false)
    localStorage.setItem('initial_Amount', JSON.stringify(amount));
    setBudget(amount)
    setAvailable(amount)
    //setAmount(0)
  };

  // useEffect(() => {
  //   const memmory = localStorage.getItem('budget');
  //   console.log(memmory);

  // }, [amount])


  return (
    <form>
      {error === true ? <Alert msg={`amount ${amount} is not valid `} /> : null}
      <label className=" d-flex text-black-100">Vecko Budget</label>
      <div className="form-group d-flex">
        <input
          type="number"
          className="form-control"
          id="amount"
          placeholder="Skriv ditt vecko budget"
          //value={amount}
          onChange={handleInput}
        />
        <button
          className="btn btn-light ml-1"
          onClick={addBudget}
        >Add</button>
      </div>
    </form>
  )
}

Formul.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setAvailable: PropTypes.func.isRequired
}
export default Formul;

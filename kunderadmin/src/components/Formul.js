import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formul = ({ allDates, updateAllDates }) => {
  // boka tider state
  const [tid, updateTid] = useState({
    husdjur: '',
    ägare: '',
    datum: '',
    klok: '',
    klinic: ''
  });

  const [error, setError] = useState(false);

  //extrac values from state till input value
  const { husdjur, ägare, datum, klok, klinic } = tid;


  const handleChange = e => {
    updateTid({
      ...tid,
      [e.target.name]: e.target.value
    })



    //updateTid(...tid,)

  };
  const addNew = e => {
    e.preventDefault();
    // form validation
    if (husdjur.trim() === '' || ägare.trim() === '' || datum.trim() === '' || klok.trim() === '' || klinic.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    console.log('adding');
    // ger en id
    tid.id = uuid();
    console.log(tid);
    //load all dates
    updateAllDates([...allDates, tid])
    //reset formul

    updateTid({
      husdjur: '',
      ägare: '',
      datum: '',
      klok: '',
      klinic: ''
    })



  };




  return (
    <Fragment>
      <h2>Skapa bokad tid</h2>
      {error ? <p className='alerta-error'>Error en formulario</p> : null}
      <form onSubmit={addNew}>
        <label>Husdjur</label>
        <input
          type="text"
          name="husdjur"
          className='u-full-width'
          placeholder='Husdjursnamn'
          onChange={handleChange}
          value={husdjur}
        />
        <label>Ägare</label>
        <input
          type="text"
          name="ägare"
          className='u-full-width'
          placeholder='Ägaresnamn'
          onChange={handleChange}
          value={ägare}
        />
        <label>Datum</label>
        <input
          type="date"
          name="datum"
          className='u-full-width'
          onChange={handleChange}
          value={datum}
        />
        <label>Klokan</label>
        <input
          type="time"
          name="klok"
          className='u-full-width'
          onChange={handleChange}
          value={klok}
        />
        <label>Klinic data</label>
        <textarea
          name="klinic"
          className='u-full-width'
          onChange={handleChange}
          value={klinic}
        >

        </textarea>
        <button
          type="submit"
          className='u-full-width button-primary'>Boka tid</button>
      </form>
    </Fragment>

  );
}

// declaramos que tipo de dato se espera de esa prop
Formul.propTypes = {
  allDates: PropTypes.array.isRequired,
  updateAllDates: PropTypes.func.isRequired
}

export default Formul;
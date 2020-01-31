import React, { useState } from 'react';
import Alert from './Alert';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const NyKostnadFormul = ({ kostnader, setKostnader, available, setAvailable }) => {
  const [koncept, setKoncept] = useState('');
  const [pris, setPris] = useState(0);
  const [error, setError] = useState(false);

  //
  const addKost = e => {
    e.preventDefault();
    //validar
    if (koncept.trim() === '' || pris < 1 || isNaN(pris)) {
      setError(true);
      return;
    }
    //skapa kostnad
    const nyKostnad = {
      koncept,
      pris,
      id: shortid.generate()
    };
    console.log(nyKostnad);
    //load kostnad i state
    setKostnader([...kostnader, nyKostnad])
    setAvailable(available - pris)

    // rst förmul
    setKoncept('');
    setPris(0);
    setError(false);

  }


  return (
    <form onSubmit={addKost}>
      {error === true ? <Alert msg={`fel i förmulär`} /> : null}
      <div className="form-group">
        <label>Ny kostnad koncept</label>
        <input
          type="text"
          className="form-control"
          placeholder="exempel. Transport"
          value={koncept}
          onChange={e => setKoncept(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Pris</label>
        <input
          type="number"
          className="form-control"
          placeholder="Mängd av pengar"
          value={pris}
          onChange={e => setPris(parseInt(e.target.value, 10))} />
      </div>
      <div className='d-flex flex-row justify-content-end'>
        <input type="submit" className="btn btn-warning" value='Skapa' />
      </div>

    </form>

  )
}
NyKostnadFormul.propTypes = {
  kostnader: PropTypes.array.isRequired,
  setKostnader: PropTypes.func.isRequired,
  available: PropTypes.number.isRequired,
  setAvailable: PropTypes.func.isRequired
}

export default NyKostnadFormul;

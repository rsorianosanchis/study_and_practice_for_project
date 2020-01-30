import React, { useState } from 'react';
import Alert from './Alert';
import shortid from 'shortid';

const NyKostnadFormul = ({ kostnader, setKostnader }) => {
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

    // rst förmul
    setKoncept('');
    setPris(0);


  }
  const pepe = toString(pris);

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
          //value={pepe}
          onChange={e => setPris(parseInt(e.target.value, 10))} />
      </div>
      <div className='d-flex flex-row justify-content-end'>
        <input type="submit" className="btn btn-warning" value='Skapa' />
      </div>

    </form>

  )
}

export default NyKostnadFormul;

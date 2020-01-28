import React, { useState } from 'react'

const NyKostnadFormul = () => {
  return (
    <form>
      <h2>Skapa ny kostnad</h2>
      <div className="form-group">
        <label for="formGroupExampleInput">Ny kostnad koncept</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Skriv namn av kostnad" />
      </div>
      <div className="form-group">
        <label for="formGroupExampleInput2">Mängd</label>
        <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Mängd av pengar" />
      </div>
      <div className='d-flex flex-row justify-content-end'>
        <input type="submit" className="btn btn-warning" value='Skapa' />
      </div>

    </form>

  )
}

export default NyKostnadFormul;

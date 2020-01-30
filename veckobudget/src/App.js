import React, { useState } from 'react';
import Formul from './components/Formul';
import NyKostnadFormul from './components/NyKostnadFormul';


function App() {
  const [budget, setBudget] = useState(0);
  const [available, setAvailable] = useState(0);
  const [kostnader, setKostnader] = useState([]);
  return (
    <div className="container-fluid">
      <header className="row bg-info">
        <div className="col-12 text-center mt-2">
          <p className="h3">Veckobudget</p>
        </div>
      </header>
      <main className='row'>
        <div className="col-6 p-0 d-flex flex-column" style={{ minHeight: '95vh' }}>
          <div className='px-3 pb-2 bg-info flex-fill'>
            {budget === 0 && available === 0
              ?
              <Formul
                setBudget={setBudget}
                setAvailable={setAvailable}
              />
              : <NyKostnadFormul kostnader={kostnader} setKostnader={setKostnader} />}
          </div>
        </div>
        <div className="col-6 p-0 d-flex flex-column" style={{ minHeight: '95vh' }}>
          <div className='px-3 pb-2 bg-info flex-fill'>
            {/* {budget === 0 && available === 0
              ?
              <Formul
                setBudget={setBudget}
                setAvailable={setAvailable}
              />
              : <NyKostnadFormul kostnader={kostnader} setKostnader={setKostnader} />} */}
          </div>
        </div>
      </main >


    </div >

  );
}

export default App;

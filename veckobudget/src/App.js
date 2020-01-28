import React, { useState } from 'react';
import Formul from './components/Formul';
import NyKostnadFormul from './components/NyKostnadFormul';


function App() {
  const [budget, setBudget] = useState();
  const [available, setAvailable] = useState();
  return (
    <div className="container-fluid">
      <header className="row bg-info">
        <div className="col-12 text-center mt-2">
          <p className="h3">Veckobudget</p>
        </div>
      </header>
      <main className='row'>
        <div className="col-6 bg-info d-flex flex-column " >
          <div className="text-center">
            <p className="h3">Settings</p>
            <Formul
              setBudget={setBudget}
              setAvailable={setAvailable}
            />
          </div>
          <div className="text-center" style={{ height: '980px' }}>
            {available > 0 ? <NyKostnadFormul /> : null}
          </div>
        </div>
      </main >


    </div >

  );
}

export default App;

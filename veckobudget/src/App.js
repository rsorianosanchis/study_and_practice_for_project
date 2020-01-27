import React, { useState } from 'react';
import Formul from './components/Formul';


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
      <header className="row bg-info">
        <div className="col-6 text-center mt-2">
          <p className="h3">Settings</p>
          <Formul
            setBudget={setBudget}
            setAvailable={setAvailable}

          />
        </div>
      </header>
    </div>

  );
}

export default App;

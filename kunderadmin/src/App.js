import React, { Fragment, useState, useEffect } from 'react';
import Formul from './components/Formul';
import Date from './components/Date';

function App() {



  //allDates i localStorage traemos las citas que puedan haber en memoria
  // si no hay igualamos a array vacio
  //esta variable ahora la carganos en el state de citas como valor inicial

  let initialDates = JSON.parse(localStorage.getItem('dates'));

  if (!initialDates) {
    initialDates = [];
  }
  // dates state
  const [allDates, updateAllDates] = useState(initialDates);
  // use effect när state changes
  useEffect(() => {
    let initialDates = JSON.parse(localStorage.getItem('dates'));
    console.log('doumento montado');
    if (initialDates) {
      localStorage.setItem('dates', JSON.stringify(allDates))
    } else {
      localStorage.setItem('dates', JSON.stringify([]))
    }
  }, [allDates])

  return (
    <Fragment>
      <h1>Veterinärpatient</h1>
      <div className='container'>
        <div className="one-half column">
          <Formul
            allDates={allDates}
            updateAllDates={updateAllDates}
          />
        </div>
        <div className="one-half column">
          {allDates.length !== 0 ? <h2>Bokat lista</h2> : <h2>Inget bokat tid</h2>}
          {allDates.map(date => <Date
            date={date}
            key={date.id}
            allDates={allDates}
            updateAllDates={updateAllDates}
          />)}
        </div>
      </div>
    </Fragment>
  );
}

export default App;

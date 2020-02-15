import React, { useState, useEffect } from 'react';
import Formul from './components/Formul';
import ListaImg from './components/ListaImg';

function App() {
  const [bilder, setBilder] = useState([]);
  const [pageActual, setPageActual] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const previousPage = e => {
    e.preventDefault();
    console.log('previous');
    const newActual = pageActual - 1;
    if (newActual === 0) {
      console.log(pageActual);
      return;
    }
    setPageActual(newActual);
    console.log(pageActual);
  };

  const nextPage = e => {
    e.preventDefault();
    console.log('next');
    const newActua = pageActual + 1;
    if (newActua > totalPages) {
      //setPageActual(totalPages);
      console.log(pageActual);
      return;
    }
    setPageActual(newActua);
    console.log(newActua);
  };

  return (
    <div className='container'>
      <div className='jumbotron mt-2 mb-0'>
        <h1 className='display-3 text-center'>Hitta bilder!</h1>
        <Formul
          setBilder={setBilder}
          setTotalPages={setTotalPages}
          pageActual={pageActual}
        />
        <hr className='my-4' />
      </div>
      <div className='row justify-content-center'>
        {pageActual === 1 ? null : (
          <button className='btn btn-info mt-2 mr-4' onClick={previousPage}>
            &laquo; Previous{' '}
          </button>
        )}
        {pageActual === totalPages ? null : (
          <button className='btn btn-info mt-2 ml-4' onClick={nextPage}>
            Next &raquo;
          </button>
        )}
        <ListaImg bilder={bilder} />
      </div>
    </div>
  );
}

export default App;

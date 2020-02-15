import React, { useState } from 'react';
import Formul from './components/Formul';
import ListaImg from './components/ListaImg';

function App() {
  const [bilder, setBilder] = useState([]);
  return (
    <div className='container'>
      <div className='jumbotron mt-2 mb-0'>
        <h1 className='display-3 text-center'>Hitta bilder!</h1>
        <Formul setBilder={setBilder} />
        <hr className='my-4' />
      </div>
      <div className='row justify-content-center'>
        <ListaImg bilder={bilder} />
      </div>
    </div>
  );
}

export default App;

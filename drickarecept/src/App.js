import React, { useContext } from 'react';
import './components/Header';
import Header from './components/Header';
import Formul from './components/Formul';
import ListaRecept from './components/ListaRecept';
import KategoriesProvider from './context/KategoriesContext';
import ReceptsProvider from './context/ReceptsContext';
import DetailProvider from './context/DetailContext';
import Modal from './components/Modal';

function App() {
  return (
    <KategoriesProvider>
      <ReceptsProvider>
        <DetailProvider>
          <Header />
          <div className='container-fluid mt-3'>
            <div className='row'>
              <div className='col-12'>
                <Formul />
              </div>
            </div>
            <div className='row mt-2'>
              <ListaRecept />
            </div>
          </div>
        </DetailProvider>
      </ReceptsProvider>
    </KategoriesProvider>
  );
}

export default App;

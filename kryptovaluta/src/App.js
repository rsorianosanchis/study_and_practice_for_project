import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import oranges from './orange_PNG794.png';
import Formul from './components/Formul';
import Result from './components/Result';
import Spinner from './components/Spinner';
import axios from 'axios';




function App() {

  const [coin, setCoin] = useState('');
  const [kryptoCoin, setkryptoCoin] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const getDataApi = async () => {
      if (coin === '') {
        return;
      }
      console.log('...calculating');
      setLoading(true);
      //
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${kryptoCoin}&tsyms=${coin}`;
      //
      const response = await axios.get(url);
      setResult(response.data.DISPLAY[kryptoCoin][coin]);
      setTimeout(() => {
        setLoading(false);

      }, 3000);



    }
    getDataApi();



  }, [coin, kryptoCoin])

  const Imagen = styled.img`
    max-width: 100%;
    margin-top:5rem;

`;


  return (
    <div className='container-fluid'>
      <header className='row justify-content-center'></header>
      <main className='row'>
        <div className="col-12 col-sm-6 d-flex justify-content-center"><Imagen src={oranges} alt='imagen naranjas' /></div>
        <div className="col-12 col-sm-6 d-flex justify-content-center">
          <div className="card mt-5 d-flex flex-column" style={{ width: '100%' }}>
            <div className="card-body">
              <h5 className="card-title text-dark">Krypto Valute Räknare</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
            <div className='align-self-center'>
              <Formul setCoin={setCoin} setkryptoCoin={setkryptoCoin} />
              {loading ? <Spinner /> : <Result result={result} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

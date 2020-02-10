import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';
import useCriptoCoin from '../hooks/useCriptoCoin';
import axios from 'axios';

const CustomButton = styled.input`
  margin-top:20px;
  font-weight:bold;
  font-size:20px;
  padding:10px;
  background-color:#66a2fe;
  border:none;
  width:100%;
  border-radius:10px;
  color:#fff;
  transition:background-color .3s ease;
  &:hover{
    background-color:#326ac0;
    cursor:pointer;
  }
`;

const Formul = ({ setCoin, setkryptoCoin }) => {
  const [listaKrypto, setListaKrypto] = useState([]);
  const [error, setError] = useState(false);

  const coins = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'SEK', name: 'Svensk Krona' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'AUD', name: 'Australian Dollar' },
  ];
  // no hace falta en el destructuting del useCoin usar los mismos nombres que la fuente
  //divisa = al state; // selectDivisa= a Select --la parte que se renseriza(return);/ updateDivisa= updateState el modificador del state
  const [divisa, SelectDivisa, updateDivisa] = useCoin('Select coin', '', coins);
  //
  const [kryptoCoin, SelectKrypto, updateKryproCoin] = useCriptoCoin('Select Krypto', '', listaKrypto);
  //
  useEffect(() => {
    const getAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const response = await axios.get(url);
      const { Data } = response.data;
      setListaKrypto(Data);
    }
    getAPI();
  }, [])

  const calculateCoin = e => {
    e.preventDefault();
    //field validation
    if (divisa === '' || kryptoCoin === '') {
      setError(true);
      return;
    }
    //psar los datos al componenete principal
    setError(false);
    setCoin(divisa);
    setkryptoCoin(kryptoCoin);

  }

  return (

    <form onSubmit={calculateCoin}>
      {error ? <div className="alert alert-danger" role="alert">
        Fill both field
</div> : null}
      <SelectDivisa />
      <SelectKrypto />
      <CustomButton type='submit' value='Räkna' />
    </form>

  )
}

export default Formul;

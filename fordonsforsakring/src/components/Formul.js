import React, { useState } from 'react';
import styled from '@emotion/styled';
import { bilAlder, prisTillverkare, prisPlan } from '../helper';
import '../index.css';
import PropTypes from 'prop-types';

//styles
const ItemFormul = styled.div`
  display:flex;
  margin-bottom:1rem;
  align-items:center;
`;
const Label = styled.label`
  flex:0 0 100px;
`;
const Select = styled.select`
  display:block;
  width:100%;
  padding:1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance:none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;
const Button = styled.button`
  background-color:#00838F;
  font-size:16px;
  width:100%;
  padding:1rem;
  color:#fff;
  text-transform:uppercase;
  font-weight:bold; 
  border:none;
  transition-property: border-radius,background-color;
  transition-duration:.2s;
  transition-timing-function:ease;

  &:hover{
    background-color:#26F6DA;
    border-radius:30px;
    cursor:pointer;
  }
`;

const Error = styled.div`
  background-color:red;
  color:white;
  padding:1rem;
  text-align:center;
  margin-bottom:2rem;
`;



const Formul = ({ setResult, setLoading }) => {

  const [data, setData] = useState({
    tillverkare: '',
    year: '',
    plan: ''
  });

  const [error, setError] = useState(false);

  //extract med destructuring alla värde
  const { tillverkare, year, plan } = data;

  //leer datos form y actuializa objeto

  const getData = e => {
    console.log(e.target.name, e.target.value, typeof (e.target.value));


    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (tillverkare.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    // precio base seguro
    let basePris = 2000;
    //varibales del bussness
    //-> obtenemos antigueedad del vehiculo
    const gammal = bilAlder(year);
    // minus 3% per vrje gammal år
    basePris = basePris - (basePris * (3 * gammal) / 100);
    //increment enligt tillverkare
    basePris = basePris * prisTillverkare(tillverkare);

    basePris = parseFloat(basePris * prisPlan(plan)).toFixed(2);
    ;
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      setResult({ pris: Number(basePris), data })

    }, 3000)





  }

  return (
    <form onSubmit={handleSubmit}>
      {error === true ? <Error>Fel i Förmulär</Error> : null}
      <ItemFormul>
        <Label>Bilmärke=> </Label>

        <Select
          name='tillverkare'
          value={tillverkare}
          onChange={getData}
        >
          <option value="">--Välja--</option>
          <option value="amerikanska">Amerikan</option>
          <option value="europeiska">Europe</option>
          <option value="japanska">Japan</option>
        </Select>
      </ItemFormul>
      <ItemFormul>
        <Label>År=> </Label>

        <Select name='year' value={year} onChange={getData}>
          <option value="">--Välja--</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </ItemFormul>
      <ItemFormul>
        <Label>Plan =></Label>
        <InputRadio type="radio" name='plan' value='basic' checked={plan === 'basic'} onChange={getData} />Basic
        <InputRadio type="radio" name='plan' value='max' checked={plan === 'max'} onChange={getData} />Max
      </ItemFormul>
      <Button type='submit'>Budget</Button>
    </form>
  )
}
Formul.propTypes = {
  setResult: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
}
export default Formul;

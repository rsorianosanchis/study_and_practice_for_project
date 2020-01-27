import React, { Fragment } from 'react'

const Date = ({ date, allDates, updateAllDates }) => {
  const { husdjur, ägare, datum, klok, klinic, id } = date;

  //delete Date
  const deleteDate = e => {
    e.preventDefault();
    console.log('delting');
    const update = allDates.filter(dataBd => dataBd.id !== id);
    updateAllDates(update);
  }
  return (
    <div className='cita'>
      <p>Husdjur: <span>{husdjur}</span></p>
      <p>Ägare: <span>{ägare}</span></p>
      <p>Datum: <span>{datum}</span></p>
      <p>Klok: <span>{klok}</span></p>
      <p>Klinic: <span>{klinic}</span></p>
      <button className='button' onClick={deleteDate}>delete &times;</button>
    </div>
  )
};

export default Date;

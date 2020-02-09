import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formul = ({ setPosition }) => {
  const [find, saveFind] = useState({ city: '', country: '', getData: false });
  const [error, setError] = useState(false);
  const { city, country } = find;
  const errorData = { cod: 'Error i Form', message: 'field är obligatorisk' }

  const handleInput = e => {
    e.preventDefault();
    saveFind({ ...find, [e.target.name]: e.target.value })


  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handle Submit');
    if (city.trim() === '' || country.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setPosition({ ...find, getData: true });
    saveFind({ city: '', country: '', getData: false });



  }


  // const geoData = (data) => {
  //   console.log(data);
  // }
  // let test = navigator.geolocation.getCurrentPosition(geoData);
  // console.log(test);
  // //let adress = `api.openweathermap.org/data/2.5/weather?lat=35&lon=139`;


  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error errorData={errorData} /> : null}
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input type="text" className="form-control" id="city" placeholder="ex.London" value={city} name='city' onChange={handleInput} />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select className="form-control" id="country" value={country} name='country' onChange={handleInput}>
          <option value=''>--select a country--</option>
          <option value='SE'>Sverige</option>
          <option value='ES'>Spain</option>
          <option value='US'>USA</option>
          <option value='AR'>Argentina</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary" >Sign in</button>
    </form>
  )
}

Formul.propTypes = { setPosition: PropTypes.func.isRequired }

export default Formul;

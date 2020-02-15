import React, { useState } from 'react';
import Error from './Error';

const Formul = ({ setBilder }) => {
  const [ord, setOrd] = useState('');
  const [error, setError] = useState(false);

  //
  const handleSubmit = e => {
    e.preventDefault();
    console.log('on submit');
    if (ord.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    getApi();
  };
  //
  const handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    setOrd(e.target.value);
  };
  //
  const getApi = () => {
    const imgPage = 100;
    const key = '15235361-cff4f59bcbd2f18ff8330db82';
    const url = `https://pixabay.com/api/?key=${key}&q=${ord}&per_page=${imgPage}`;
    const getApi = fetch(url).then(resp => resp.json());
    getApi.then(response => {
      console.log(response);
      setBilder(response.hits);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error msg='Field must have some word' /> : null}
      <legend>Sökord !</legend>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          aria-describedby='input Text'
          placeholder='exempel. flower yellow'
          onChange={handleChange}
          value={ord}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Formul;

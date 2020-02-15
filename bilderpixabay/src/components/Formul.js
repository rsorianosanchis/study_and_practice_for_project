import React, { useState, useEffect } from 'react';
import Error from './Error';

const Formul = ({ setBilder, setTotalPages, pageActual }) => {
  const [parameters, setParameters] = useState({
    word: '',
    resultsPerPage: '3'
  });
  const { word, resultsPerPage } = parameters;
  //
  const [find, setFind] = useState('');
  const [error, setError] = useState(false);
  const [imgPerPage, setImgPerPage] = useState(resultsPerPage);
  //
  //
  //const { word, resultsPerPage, bilder, totalBilder } = parameters;
  //
  const handleSubmit = e => {
    e.preventDefault();
    if (word.trim() === '' || resultsPerPage === '0') {
      setError(true);
      return;
    }
    setError(false);
    setFind(word);
    setImgPerPage(resultsPerPage);
  };
  //
  const handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    setParameters({ ...parameters, [e.target.name]: e.target.value });
  };
  //
  useEffect(() => {
    if (find === '') {
      return;
    }
    getApi();
  }, [find, imgPerPage, pageActual]);

  const getApi = () => {
    const key = '15235361-cff4f59bcbd2f18ff8330db82';
    const url = `https://pixabay.com/api/?key=${key}&q=${find}&per_page=${imgPerPage}&page=${pageActual}`;
    const getApi = fetch(url).then(resp => resp.json());
    getApi.then(response => {
      console.log(response);
      setBilder(response.hits);
      setTotalPages(Math.ceil(response.totalHits / parseInt(imgPerPage)));
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
          value={word}
          name='word'
        />
      </div>
      <div className='form-group'>
        <input
          min='3'
          type='number'
          className='form-control'
          aria-describedby='input Number'
          placeholder='3'
          onChange={handleChange}
          value={resultsPerPage}
          name='resultsPerPage'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Formul;

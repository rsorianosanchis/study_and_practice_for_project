import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ setLyric, setInfo }) => {
  const [find, setFind] = useState({ artist: '', song: '' });
  const [error, setError] = useState(false);
  //
  const { artist, song } = find;
  //
  const handleChange = e => {
    e.preventDefault();
    setFind({ ...find, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (artist.trim() === '' || song.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    const api = fetch(url).then(data => data.json());
    api.then(response => {
      setLyric(response.lyrics);
    });

    const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
    const api2 = fetch(url2).then(data => data.json());
    api2.then(response => {
      setInfo(response.artists[0]);
      console.log(response.artists[0]);
    });
  };

  return (
    <div className='bg-info'>
      <div className='container'>
        {error ? <Error msg='ckeck fields i form' /> : null}
        <div className='row'>
          <form
            className='col card text-white bg-transparent mb-5 pt-5 pb-2'
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend className='text-center'>Song Finder</legend>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Artist</label>
                    <input
                      type='text'
                      className='form-control'
                      name='artist'
                      placeholder='artist'
                      onChange={handleChange}
                      value={artist}
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Song</label>
                    <input
                      type='text'
                      className='form-control'
                      name='song'
                      placeholder='song'
                      onChange={handleChange}
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className='btn btn-snygg btn-sm float-right'
              >
                Find
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
// https://api.lyrics.ovh/v1/artist/title

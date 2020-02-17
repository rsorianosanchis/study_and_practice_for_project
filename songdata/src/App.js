import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Song from './components/Song';
import Info from './components/Info';

function App() {
  const [lyric, setLyric] = useState('');
  const [info, setInfo] = useState({});
  return (
    <Fragment>
      <Formulario setLyric={setLyric} setInfo={setInfo} />
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <Info info={info} />
          </div>
          <div className='col-12 col-md-6'>
            <Song lyric={lyric} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import Formul from './components/Formul';
import Klima from './components/klima';
import Error from './components/Error';

function App() {

  const [position, setPosition] = useState({});
  const [apiData, setApiDAta] = useState({});
  const [getOk, setGetOk] = useState(false);
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState({});
  const { city, country, getData } = position;


  useEffect(() => {
    // other code

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=91afaeda6f7aab3ca545ab7d9e97a82a`;

    //

    // const asyncGet = () => {
    //   const solicitud = fetch(url).then(item => item.json());
    //   solicitud.then(item => setApiDAta(item));
    // }

    const getApi = async () => {
      setGetOk(false);
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      if (data.cod === '404') {
        setError(true);
        setErrorData(data);
        return;
      }
      setError(false);
      setApiDAta(data);
      setGetOk(true);
    }
    //
    if (getData) {
      getApi();
      //asyncGet();
    }




    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])

  return (

    <Fragment>
      <Header />
      <div className='container-flow'>
        <div className='row'>
          <div className="col-12 col-sm-6 d-flex justify-content-center">
            <Formul position={position} setPosition={setPosition} />
          </div>
          <div className="col-12 col-sm-6 d-flex justify-content-center">

            {error ? <Error errorData={errorData} /> : getOk ? <Klima apiData={apiData} /> : null}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;

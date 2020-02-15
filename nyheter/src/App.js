import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formul from './components/Formul';
import Spinner from './components/Spinner';
import Carousel from './components/Carousel';

function App() {

  const [cat, setCat] = useState('');
  const [nyheter, setNyheter] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    const getApi = () => {
      const url = `https://newsapi.org/v2/top-headlines?country=se&category=${cat}&apiKey=e7efcff09e8f4d2fbe309f9c60caf027`;
      const response = fetch(url).then(data => data.json());
      response.then(item => {
        console.log(item)
        setNyheter(item.articles)
        setLoading(false)
      }
      )

    }
    getApi();

  }, [cat])

  return (
    <Fragment>
      <Header title='News Finder' />
      <div className="container">
        {loading ? <Spinner /> : <Formul setCat={setCat} />}

      </div>
      <Carousel nyheter={nyheter} />
    </Fragment>
  );
}

export default App;

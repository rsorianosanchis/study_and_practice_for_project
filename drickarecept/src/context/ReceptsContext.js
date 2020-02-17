import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ReceptsContext = createContext();

const ReceptsProvider = props => {
  const [recepts, setRecepts] = useState([]);
  const [find, setFind] = useState({ ingredient: '', kategori: '' });
  const { ingredient, kategori } = find;

  useEffect(() => {
    if (ingredient.trim() !== '' || kategori.trim() !== '') {
      console.log('test');

      const urlRecept = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${kategori}`;
      axios
        .get(urlRecept)
        .then(response => setRecepts(response.data.drinks))
        .catch(error => console.log(error, 'test de errror'));
    }
  }, [find]);

  return (
    <ReceptsContext.Provider value={{ recepts, setFind }}>
      {props.children}
    </ReceptsContext.Provider>
  );
};

export default ReceptsProvider;

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// skapa context

export const KategoriesContext = createContext();

//provider är var ligger states och functioner

const KategoriesProvider = props => {
  //state del context
  const [kategories, setKategories] = useState([]);

  const urlCat = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  useEffect(() => {
    // con fetch
    // const apiCat = fetch(urlCat).then(data => data.json());
    //
    // apiCat.then(response => setKategories(response.drinks));
    //con axios
    const getApi = async () => {
      axios.get(urlCat).then(response => {
        console.log(response);
        setKategories(response.data.drinks);
      });
    };
    getApi();
  }, []);

  return (
    <KategoriesContext.Provider value={{ kategories }}>
      {props.children}
    </KategoriesContext.Provider>
  );
};

export default KategoriesProvider;

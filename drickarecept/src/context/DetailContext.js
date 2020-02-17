import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
//
export const DetailContext = createContext();
//
const DetailProvider = props => {
  const [id, setId] = useState('');
  const [superDetails, setSuperDetails] = useState({});

  useEffect(() => {
    if (id !== '') {
      const urlDetail = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      axios
        .get(urlDetail)
        .then(response => setSuperDetails(response.data.drinks[0]));
    }
  }, [id]);

  return (
    <DetailContext.Provider value={{ setId, superDetails }}>
      {props.children}
    </DetailContext.Provider>
  );
};

export default DetailProvider;

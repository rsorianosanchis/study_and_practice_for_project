import React, { Fragment, useContext } from 'react';
import { ReceptsContext } from '../context/ReceptsContext';
import Detail from './Detail';

const ListaRecept = () => {
  const { recepts } = useContext(ReceptsContext);
  if (recepts.length === 0) {
    return null;
  }
  console.log(recepts);

  return (
    <Fragment>
      {recepts.map(drink => (
        <Detail drink={drink} key={drink.idDrink} />
      ))}
    </Fragment>
  );
};

export default ListaRecept;

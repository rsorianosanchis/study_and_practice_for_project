import React from 'react';
import Img from './Img';

const ListaImg = ({ bilder }) => {
  return (
    <div className='col-12 p-5 row'>
      {bilder.map(bild => (
        <Img bild={bild} key={bild.id} />
      ))}
    </div>
  );
};

export default ListaImg;

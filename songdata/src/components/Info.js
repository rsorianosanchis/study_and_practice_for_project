import React, { Fragment } from 'react';

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) {
    return null;
  }
  const { strBiographyEN, strArtistThumb, strGenre } = info;
  return (
    <Fragment>
      <h3>Artist Info</h3>
      <img src={strArtistThumb} alt='foto' style={{ maxWidth: '200px' }} />
      <p>Genre: {strGenre} </p>
      <hr className='bg-info ' />
      <p>{strBiographyEN}</p>
    </Fragment>
  );
};

export default Info;

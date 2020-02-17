import React, { Fragment } from 'react';

const Song = ({ lyric }) => {
  if (lyric === '') {
    return null;
  }
  return (
    <Fragment>
      <h3>Letter of Song</h3>
      <hr className='bg-info ' />
      <p>{lyric}</p>
    </Fragment>
  );
};
export default Song;

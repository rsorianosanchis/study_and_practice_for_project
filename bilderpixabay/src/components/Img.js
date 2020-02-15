import React from 'react';

const Img = ({ bild }) => {
  const { previewURL, webformatURL, likes, tags, views, largeImageURL } = bild;
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
      <div className='card m-2'>
        <img src={previewURL} alt={tags} className='card-img-top' />
        <div className='car-body'>
          <p className='card-text'>{likes} Ja tycker om</p>
          <p className='card-text'>{views} Sett</p>
        </div>
        <div className='card-footer'>
          <a href={largeImageURL} target='_blank' rel='noopener noreferrer'>
            Se stor bild
          </a>
        </div>
      </div>
    </div>
  );
};

export default Img;

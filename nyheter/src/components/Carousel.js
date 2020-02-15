import React, { Fragment } from 'react'

const Carousel = ({ nyheter }) => {

  return (
    <div id="carouselExampleCaptions" className="row carousel slide mt-2" data-ride="carousel">
      <ol className="carousel-indicators">
        {nyheter.map(nyhet => {
          if (nyheter.indexOf(nyhet) === 0) {
            return <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" key={nyheter.indexOf(nyhet)}></li>
          } else {
            return <li data-target="#carouselExampleCaptions" data-slide-to={nyheter.indexOf(nyhet)} key={nyheter.indexOf(nyhet)}></li>
          }
        })}
      </ol>
      <div className="carousel-inner">

        {nyheter.map(nyhet => {
          if (nyheter.indexOf(nyhet) === 0) {
            return (
              <div className="carousel-item active" key={nyheter.indexOf(nyhet)}>
                <img src={nyhet.urlToImage} className="d-block  w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <div style={{ backgroundColor: '#4e4e4ea4', borderRadius: '1rem', padding: '1rem' }}>
                    <h5>{nyhet.title}</h5>
                    <p>{nyhet.description}</p>
                  </div>
                </div>
              </div>)
          } else {
            return (


              <div className="carousel-item" key={nyheter.indexOf(nyhet)}>
                <img src={nyhet.urlToImage} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <div style={{ backgroundColor: '#4e4e4ea4', borderRadius: '1rem', padding: '1rem' }}>
                    <h5>{nyhet.title}</h5>
                    <p>{nyhet.description}</p>
                  </div>
                </div>
              </div>)

          }

        })}

      </div>
      <div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Carousel;

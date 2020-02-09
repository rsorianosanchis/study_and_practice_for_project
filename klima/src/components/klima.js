import React from 'react'

const klima = ({ apiData }) => {
  const { main, name } = apiData;
  const { temp } = main;

  return (
    <div className="card mt-2">
      <div className="card-header">
        {name}
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{temp}</p>
          <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>

  )
}

export default klima

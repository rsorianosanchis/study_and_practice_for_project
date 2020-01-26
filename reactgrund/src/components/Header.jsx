import React, { Fragment } from 'react'

function Header({ date, time }) {
  //aqui puedo poner logica

  let edad = 10;
  let msg;
  if (edad < 18) {
    msg = 'Dur kan inte köpa alcohol'
  } else {
    msg = 'Du får drika alcohol'
  }

  return (
    <Fragment>
      <h3>Full date: {date} </h3>
      <h3>Full time: {time}</h3>
      <h4>Du är {edad} år gammal, {msg} </h4>
    </Fragment>)
}

export default Header

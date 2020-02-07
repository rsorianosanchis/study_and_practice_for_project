import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
const Msg = styled.p`
  color:green;
  text-align:center;
  background-color:#DCDCDC;
  padding:0.7rem;
  margin-top:0.5rem;
  position: relative;

`;

const Response = ({ pris }) => {
  return (
    pris === 0
      ? <Msg>Fill förmulär</Msg>
      :
      <TransitionGroup component='div' className='resultado'>
        <CSSTransition classNames='resultado' key={pris} timeout={{ enter: 500, exit: 500 }}><Msg>Pris är: {pris} kr</Msg>
        </CSSTransition>
      </TransitionGroup>

  )

}

Response.propTypes = {
  pris: PropTypes.number.isRequired
};

export default Response;

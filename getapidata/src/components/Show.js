import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ShowContainer = styled.div`

 padding:2rem;
 border-radius:.5rem;
 background-color:#fff;
 max-width:800px;
 @media(min-width:992px){
   margin-top:10rem;
 }
`;



const Show = ({ phrase }) => {
  const { quote, author } = phrase;
  return (
    <ShowContainer>
      <h2>{quote}</h2>
      <p><strong>{author}</strong></p>
    </ShowContainer>
  )
}

Show.propTypes = PropTypes.object.isRequired;
export default Show;

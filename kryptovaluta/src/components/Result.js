import React from 'react';
import styled from '@emotion/styled';

const ResultContainer = styled.div`
  color:black;

  
`;

const Price = styled.p`
  font-size:30px;
  span{
  font-weight:bold;
}
`;

const Info = styled.p`
font-size:18px;
span{
  font-weight:bold;
}

`;

const Result = ({ result }) => {
  if (Object.keys(result).length === 0) {
    return null;
  }
  console.log(result);

  return (
    <ResultContainer>
      <Price>Price is :  <span>{result.PRICE}.</span> </Price>
      <Info>Price day highest :  <span>{result.HIGHDAY}.</span> </Info>
      <Info>Price day lowest :  <span>{result.LOWDAY}.</span> </Info>
      <Info>24H variation :  <span>{result.CHANGEPCT24HOUR}.</span> </Info>
      <Info>Last update :  <span>{result.LASTUPDATE}.</span> </Info>
    </ResultContainer>
  )
}

export default Result;

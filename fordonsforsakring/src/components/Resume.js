import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { firstUppercase } from '../helper';
import PropTypes from 'prop-types';

const ContResumen = styled.div`
  padding:1rem;
  text-align:center;
  background-color:#00838F;
  color:#FFF;
  margin-top:1rem;
`;


const Resume = ({ data }) => {


  console.log(data);
  const { tillverkare, year, plan } = data;
  if (tillverkare === '' || year === '' || plan === '') {
    return null;
  }

  return (
    <ContResumen>
      <h2>Budget resume</h2>
      <ul>
        <li>tillverkare: {firstUppercase(tillverkare)}</li>
        <li>year: {year}</li>
        <li>plan: {firstUppercase(plan)}</li>
      </ul>

    </ContResumen>
  )
}

Resume.propTypes = {
  data: PropTypes.object.isRequired
}

export default Resume;

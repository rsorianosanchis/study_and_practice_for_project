import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formul from './components/Formul';

const MainContainer = styled.div`
max-width:600px;
margin:0 auto;
`;
const FormContainer = styled.div`
background-color:#FFF;
padding:3rem;
`;



function App() {
  return (
    <MainContainer>
      <Header titulo='Bil försäkring budget' />
      <FormContainer>
        <Formul />
      </FormContainer>
    </MainContainer>
  );
}

export default App;

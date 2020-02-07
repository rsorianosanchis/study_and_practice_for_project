import React, { useState, Fragment } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formul from './components/Formul';
import Resume from './components/Resume';
import Response from './components/Response';
import Spinner from './components/Spinner';

const MainContainer = styled.div`
max-width:600px;
margin:0 auto;
`;
const FormContainer = styled.div`
background-color:#FFF;
padding:3rem;
`;

function App() {
  const [result, setResult] = useState({ pris: 0, data: { tillverkare: '', year: '', plan: '' } });

  const [loading, setLoading] = useState(false);
  const { data, pris } = result;


  console.log(result);

  return (
    <MainContainer>
      <Header titulo='Bil försäkring budget' />
      <FormContainer>
        <Formul
          result={result}
          setResult={setResult}
          setLoading={setLoading}
          loading={loading}
        />
        {loading ?

          <Spinner />

          : <Fragment>

            <Resume data={data} />
            <Response pris={pris} />
          </Fragment>}
      </FormContainer>
    </MainContainer>
  );
}

export default App;

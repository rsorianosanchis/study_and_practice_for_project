import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Show from './components/Show';

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
padding-top:5rem;


`;

const MainButton = styled.button`
  background:-webkit-linear-gradient(top left,#007d35 0%,#0f574e 50%,#0f574e 100%);
  background-size:300px;
  font-display:'Arial',Helvetica,sans-serif;
  color:#fff;
  margin-top:3rem;
  padding:1rem 3rem;
  font-size:2rem;
  border:2px solid black;
  transition:background-size .8s ease;
  &:hover{
    cursor: pointer;
    background-size:800px;
    box-shadow:2px 2px 10px #007d35;
  }
`;

function App() {

  const [phrase, setPhrase] = useState({});

  useEffect(() => {
    handleClick();
  }, [])


  // asyncrona. el programa corre. Por eso se usa el then() cada vez. para que se ejecute un codigo una vez l apeticion quede completada
  // const handleClick = () => {
  //   console.log('consultando');
  //   const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const response = api.then(resp => resp.json());

  //   response.then(result => console.log(result[0].author));
  //   console.log('test');
  // };

  // sync, el programa espera, el then ya no es necesario por que no es una promesa.
  const handleClick = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const response = await api.json();
    setPhrase(response[0])
  }


  // const { quote } = phrase;

  return (
    <Container>
      {/* {quote ? <Show phrase={phrase} /> : null} */}
      {Object.keys(phrase).length !== 0 ? <Show phrase={phrase} /> : null}

      <MainButton onClick={handleClick}>
        Get meningen
    </MainButton>
    </Container>
  );
}

export default App;

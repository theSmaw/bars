import React from 'react';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Welcome>
        Hello world
      </Welcome>
    </Container>
  );
}

const Welcome = styled.Text`
  font-family: Quicksand, sans-serif;
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #004499
`;

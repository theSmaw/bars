import React, { Component } from 'react';
import styled from 'styled-components/native';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Welcome>
          Hello world
        </Welcome>
      </Container>
    );
  }
}

const Welcome = styled.Text`
  font-family: Quicksand;
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

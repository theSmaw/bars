import React, { Component } from 'react';
import styled from 'styled-components';

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
  fontSize: 20px;
  textAlign: center;
  margin: 10px;
`;

const Container = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: #004499
`;

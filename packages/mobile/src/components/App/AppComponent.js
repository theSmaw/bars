import React from 'react';
import styled from 'styled-components/native';

import BarsComponent from '../Bars/BarsComponent'; // eslint-disable-line import/no-named-as-default

export default function AppComponent() {
  return (
    <Container>
      <BarsComponent />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fbf7f2
`;

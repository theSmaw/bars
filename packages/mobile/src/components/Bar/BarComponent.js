import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native/index';

export default function BarComponent({ limit, value }) {
  return (
    <Bar>
      <Progress
        limit={limit}
        value={value}
      >
        <Value>{value}</Value>
      </Progress>
    </Bar>
  );
}

BarComponent.propTypes = {
  limit: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

const Bar = styled.View`
  width: 500px;
`;

// In React-Native it's not possible to use mount from Enzyme. This makes it hard to test logic in
// styled-components using Jest Snapshots. I remain unconvinced that styled-components is the right
// solution.
/* istanbul ignore next */
const Progress = styled.View`
  display: flex;
  height: 35px;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 20px 0;
  background-color: #66c1d2;
  width: ${props => (props.value / props.limit) * 100}%;
`;

const Value = styled.Text`
  color: #fff;
  text-align: center;
`;

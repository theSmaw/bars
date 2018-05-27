import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function BarComponent({ limit, value }) {
  return (
    <div className="bar">
      <Progress
        className="progress"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={limit}
        limit={limit}
        value={value}
      >
        {value}
      </Progress>
    </div>
  );
}

BarComponent.propTypes = {
  limit: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function getProgressWidth({ value, limit }) {
  return Math.min((value / limit) * 100, 100);
}

const Progress = styled.div`
  color: #fff;
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 20px 0;
  text-align: center;
  background-color: ${props => (props.value > props.limit ? '#ff0000' : '#66c1d2')};
  transition: width .6s ease;
  width: ${getProgressWidth}%;
`;

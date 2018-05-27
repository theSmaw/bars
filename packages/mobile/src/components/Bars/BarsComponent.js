import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { WithBarsContainer } from 'bars-shared';

import BarComponent from '../Bar/BarComponent';

export function BarsComponent({ bars, limit }) {
  return (
    <View>
      {
        bars.map((bar, index) => (
          <BarComponent

            // Generally considered an anti-pattern to use index as a key. We could massage the data
            // that comes back to add unique identifiers for each item, but this list is simple and
            // small and it is not worth the complexity
            key={index} // eslint-disable-line react/no-array-index-key

            limit={limit}
            value={bar}
          />
        ))
      }
    </View>
  );
}

BarsComponent.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.number).isRequired,
  limit: PropTypes.number.isRequired
};

export default WithBarsContainer(BarsComponent);

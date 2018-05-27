import React from 'react';
import PropTypes from 'prop-types';

import { WithBarsContainer } from 'bars-shared';

import BarComponent from '../Bar/BarComponent';

export function BarsComponent({
  bars,
  buttons,
  limit,
  onButtonClicked,
  onSelected,
  selectedBar
}) {
  return (
    <div className="bars">
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
      <div>
        <select
          className="barsSelect"
          onChange={
            /* istanbul ignore next */
            e => onSelected(e.target.value)
          }
          value={selectedBar}
        >
          {
            bars.map((bar, index) => (
              <option
                key={index} // eslint-disable-line react/no-array-index-key
                value={index}
              >
                Bar {index + 1}
              </option>
            ))
          }
        </select>
        <div>
          {
            buttons.map((button, index) => (
              <button
                className="barsButton"
                key={index} // eslint-disable-line react/no-array-index-key
                onClick={
                  /* istanbul ignore next */
                  () => onButtonClicked(button)
                }
              >
                {button}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
}

BarsComponent.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.number).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.number).isRequired,
  limit: PropTypes.number.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  selectedBar: PropTypes.number.isRequired
};

export default WithBarsContainer(BarsComponent);

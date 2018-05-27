import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getBars,
  getLimit,
  loadBars
} from './BarsRedux';

export default function WithBarsContainer(WrappedComponent) {
  class BarsContainer extends Component {
    componentDidMount() {
      this.props.loadBars();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  BarsContainer.propTypes = {
    loadBars: PropTypes.func.isRequired
  };

  return connect(
    /* istanbul ignore next */
    state => ({
      bars: getBars(state),
      limit: getLimit(state)
    }),

    /* istanbul ignore next */
    dispatch => ({
      loadBars() {
        const action = loadBars();

        dispatch(action);
      }
    })
  )(BarsContainer);
}

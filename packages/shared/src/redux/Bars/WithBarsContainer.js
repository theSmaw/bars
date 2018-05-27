import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  barSelected,
  buttonClicked,
  getBars,
  getButtons,
  getLimit,
  getSelectedBar,
  loadBars
} from './BarsRedux';

export default function WithBarsContainer(WrappedComponent) {
  class BarsContainer extends Component {
    componentDidMount() {
      this.props.loadBars();
    }

    handleButtonClicked = button => this.props.buttonClicked(button);

    handleSelected = selectedBar => this.props.barSelected(selectedBar);

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onButtonClicked={this.handleButtonClicked}
          onSelected={this.handleSelected}
        />
      );
    }
  }

  BarsContainer.propTypes = {
    barSelected: PropTypes.func.isRequired,
    buttonClicked: PropTypes.func.isRequired,
    loadBars: PropTypes.func.isRequired
  };

  return connect(
    /* istanbul ignore next */
    state => ({
      bars: getBars(state),
      buttons: getButtons(state),
      limit: getLimit(state),
      selectedBar: getSelectedBar(state)
    }),

    /* istanbul ignore next */
    dispatch => ({
      barSelected(selectedBar) {
        const action = barSelected(selectedBar);

        dispatch(action);
      },
      buttonClicked(button) {
        const action = buttonClicked(button);

        dispatch(action);
      },
      loadBars() {
        const action = loadBars();

        dispatch(action);
      }
    })
  )(BarsContainer);
}

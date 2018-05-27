import React from 'react';
import { mount } from 'enzyme';

import WithBarsContainer from './WithBarsContainer';
import { loadBars } from './BarsRedux';

jest.mock('./BarsRedux', () => ({
  getBars: () => {},
  getLimit: () => {},
  loadBars: jest.fn()
}));

describe('WithBarsContainer', () => {
  describe('componentDidMount', () => {
    it('Should load the bars', () => {
      const Component = () => <div />;

      const WrappedComponent = WithBarsContainer(Component);

      mount(<WrappedComponent
        store={{
          dispatch: () => {},
          getState: () => ({
            bars: {}
          }),
          injectReducer: () => {},
          subscribe: () => {}
        }}
      />);

      expect(loadBars).toHaveBeenCalled();
    });
  });
});

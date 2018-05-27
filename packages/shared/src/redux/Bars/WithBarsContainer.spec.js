import React from 'react';
import { mount } from 'enzyme';

import WithBarsContainer from './WithBarsContainer';
import { barSelected, buttonClicked, loadBars } from './BarsRedux';

jest.mock('./BarsRedux', () => ({
  barSelected: jest.fn(),
  buttonClicked: jest.fn(),
  getBars: () => {},
  getButtons: () => {},
  getLimit: () => {},
  getSelectedBar: () => {},
  loadBars: jest.fn()
}));

describe('WithBarsContainer', () => {
  const Component = () => <div>So GOOD</div>;

  function mountWithBarsContainer() {
    const WrappedComponent = WithBarsContainer(Component);

    return mount(
      <WrappedComponent
        store={{
          dispatch: () => {},
          getState: () => ({
            bars: {}
          }),
          injectReducer: () => {},
          subscribe: () => {}
        }}
      />
    );
  }

  describe('componentDidMount', () => {
    it('Should load the bars', () => {
      mountWithBarsContainer();

      expect(loadBars).toHaveBeenCalled();
    });
  });

  it('Should call barSelected when a bar is selected', () => {
    const withBarsContainer = mountWithBarsContainer();

    withBarsContainer
      .find(Component)
      .props()
      .onSelected(1);

    expect(barSelected).toHaveBeenCalledWith(1);
  });

  it('Should call buttonClicked when a button is clicked', () => {
    const withBarsContainer = mountWithBarsContainer();

    withBarsContainer
      .find(Component)
      .props()
      .onButtonClicked(2);

    expect(buttonClicked).toHaveBeenCalledWith(2);
  });
});

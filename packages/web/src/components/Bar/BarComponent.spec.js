import React from 'react';
import { mount } from 'enzyme';

import BarComponent from './BarComponent';

describe('BarComponent', () => {
  it('Should render with the correct value', () => {
    const barComponent = mount(
      <BarComponent
        limit={50}
        value={5}
      />
    );

    expect(barComponent).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import BarComponent from './BarComponent';

describe('BarComponent', () => {
  it('Should render with the correct value', () => {
    const barComponent = shallow(
      <BarComponent
        limit={50}
        value={5}
      />
    );

    expect(barComponent).toMatchSnapshot();
  });
});

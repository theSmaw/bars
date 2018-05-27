import React from 'react';
import { shallow } from 'enzyme';

import AppComponent from './AppComponent';

describe('AppComponent', () =>

  it('Should render', () => {
    const appComponent = shallow(<AppComponent />);

    expect(appComponent).toMatchSnapshot();
  })
);

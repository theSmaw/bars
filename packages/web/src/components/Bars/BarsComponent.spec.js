import React from 'react';
import { shallow } from 'enzyme';

import { BarsComponent } from './BarsComponent';

describe('BarsComponent', () =>

  it('Should render bars', () => {
    const barsComponent = shallow(
      <BarsComponent
        bars={[1, 2, 3]}
        buttons={[10, 20, -30]}
        limit={50}
        onButtonClicked={() => {}}
        onSelected={() => {}}
        selectedBar={0}
      />
    );

    expect(barsComponent).toMatchSnapshot();
  })
);

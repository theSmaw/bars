import barsReducer, {
  barSelected,
  buttonClicked,
  getBars,
  getButtons,
  getLimit,
  getSelectedBar,
  loadBars
} from './BarsRedux';

jest.mock('../../api/BarApi', () => ({
  load: () => Promise.resolve({
    buttons: [27, 16, -34, -25],
    bars: [15, 42, 42],
    limit: 110
  })
}));

describe('BarsRedux', () => {
  describe('loadBars', () => {
    it('Should dispatch BARS_LOADED when the bars have loaded', () => {
      const dispatch = jest.fn();

      return loadBars()(dispatch)
        .then(() =>
          expect(dispatch).toHaveBeenCalledWith({
            bars: [15, 42, 42],
            buttons: [27, 16, -34, -25],
            limit: 110,
            type: 'BARS_LOADED'
          }));
    });
  });

  describe('barsReducer', () => {
    describe('BARS_SELECTED', () => {
      it('Should add the selected bar to state', () => {
        const state = barsReducer({}, barSelected('2'));

        expect(state.selectedBar)
          .toEqual(2);
      });
    });

    describe('BUTTON_CLICKED', () => {
      it('Should update the value of the bar', () => {
        const state = barsReducer({
          bars: [1, 2, 3],
          selectedBar: 1
        }, buttonClicked(20));

        expect(state.bars)
          .toEqual([1, 22, 3]);
      });

      it('Should not let bar value go below 0', () => {
        const state = barsReducer({
          bars: [1, 2, 3],
          selectedBar: 2
        }, buttonClicked(-20));

        expect(state.bars)
          .toEqual([1, 2, 0]);
      });
    });

    describe('BARS_LOADED', () => {
      it('Should add the bars to state', () => {
        const state = barsReducer({}, {
          bars: ['bars'],
          type: 'BARS_LOADED'
        });

        expect(state.bars).toEqual(['bars']);
      });

      it('Should add the buttons to state', () => {
        const state = barsReducer({}, {
          buttons: ['buttons'],
          type: 'BARS_LOADED'
        });

        expect(state.buttons).toEqual(['buttons']);
      });

      it('Should add the limit to state', () => {
        const state = barsReducer({}, {
          limit: 50,
          type: 'BARS_LOADED'
        });

        expect(state.limit).toEqual(50);
      });
    });

    describe('UNKNOWN_TYPE', () => {
      it('Should return the state', () => {
        const state = barsReducer(undefined, {
          type: 'UNKNOWN_TYPE'
        });

        expect(state).toEqual({
          bars: [],
          buttons: [],
          limit: 100,
          selectedBar: 0
        });
      });
    });
  });

  describe('getBars', () => {
    it('Should return the bars', () => {
      const bars = getBars({
        bars: {
          bars: ['bars']
        }
      });

      expect(bars).toEqual(['bars']);
    });
  });

  describe('getButtons', () => {
    it('Should return the buttons', () => {
      const buttons = getButtons({
        bars: {
          buttons: ['buttons']
        }
      });

      expect(buttons).toEqual(['buttons']);
    });
  });

  describe('getLimit', () => {
    it('Should return the limit', () => {
      const limit = getLimit({
        bars: {
          limit: 67
        }
      });

      expect(limit).toEqual(67);
    });
  });

  describe('getSelectedBar', () => {
    it('Should return the selected bar', () => {
      const selectedBar = getSelectedBar({
        bars: {
          selectedBar: 3
        }
      });

      expect(selectedBar).toEqual(3);
    });
  });
});

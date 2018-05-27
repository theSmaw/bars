import barsReducer, {
  getBars,
  getLimit,
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
            limit: 110,
            type: 'BARS_LOADED'
          }));
    });
  });

  describe('barsReducer', () => {
    describe('BARS_LOADED', () => {
      it('Should add the bars to state', () => {
        const state = barsReducer({}, {
          bars: ['bars'],
          type: 'BARS_LOADED'
        });

        expect(state.bars).toEqual(['bars']);
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
          limit: 100
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
});

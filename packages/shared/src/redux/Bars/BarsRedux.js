import { load } from '../../api/BarApi';

const BARS_LOADED = 'BARS_LOADED';

function barsLoaded({ bars, limit }) {
  return {
    bars,
    limit,
    type: BARS_LOADED
  };
}

export function loadBars() {
  return dispatch => (

    load()
      .then(bars => dispatch(barsLoaded(bars)))
  );
}

const initialState = {
  bars: [],
  limit: 100
};

export default function barsReducer(state = initialState, action) {
  switch (action.type) {
    case BARS_LOADED: return {
      ...state,
      bars: action.bars,
      limit: action.limit
    };
    default:
      return state;
  }
}

export function getBars(state) {
  return state.bars.bars;
}

export function getLimit(state) {
  return state.bars.limit;
}


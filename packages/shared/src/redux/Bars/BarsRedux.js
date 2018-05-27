import { load } from '../../api/BarApi';

const BAR_SELECTED = 'BAR_SELECTED';
const BARS_LOADED = 'BARS_LOADED';
const BUTTON_CLICKED = 'BUTTON_CLICKED';

function barsLoaded({ bars, buttons, limit }) {
  return {
    bars,
    buttons,
    limit,
    type: BARS_LOADED
  };
}

export function barSelected(selectedBar) {
  return {
    selectedBar,
    type: BAR_SELECTED
  };
}

export function buttonClicked(button) {
  return {
    button,
    type: BUTTON_CLICKED
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
  buttons: [],
  limit: 100,
  selectedBar: 0
};

function updateBars(bar, index, button, selectedBar) {
  if (selectedBar === index) {
    return Math.max(bar + button, 0);
  }

  return bar;
}

export default function barsReducer(state = initialState, action) {
  switch (action.type) {
    case BAR_SELECTED: return {
      ...state,
      selectedBar: parseInt(action.selectedBar, 10)
    };
    case BARS_LOADED: return {
      ...state,
      bars: action.bars,
      buttons: action.buttons,
      limit: action.limit
    };
    case BUTTON_CLICKED: return {
      ...state,
      bars: state.bars.map((bar, index) => updateBars(bar, index, action.button, state.selectedBar))
    };
    default:
      return state;
  }
}

export function getBars(state) {
  return state.bars.bars;
}

export function getButtons(state) {
  return state.bars.buttons;
}

export function getLimit(state) {
  return state.bars.limit;
}

export function getSelectedBar(state) {
  return state.bars.selectedBar;
}


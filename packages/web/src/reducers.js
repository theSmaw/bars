import { combineReducers } from 'redux';

import { barsReducer as bars } from 'bars-shared';

const reducers = combineReducers({
  bars
});

export default reducers;

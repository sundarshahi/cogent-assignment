import { combineReducers } from 'redux';

import topicsReducer from './topics';
import threadsReducer from './threads';
import threadReducer from './thread';

const reducer = combineReducers({
  topics: topicsReducer,
  threads: threadsReducer,
  thread: threadReducer,
});

export default reducer;

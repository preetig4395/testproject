// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import chatReducer from './chatReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  chats: chatReducer,
});
// Exports
export default rootReducer;

// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import {getChats} from './chatSaga';
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(getChats)]);
}

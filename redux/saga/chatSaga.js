// Imports: Dependencies
import {delay, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {messages} from '../../utils/constants';
// Worker: Increase Counter Async (Delayed By 4 Seconds)

export function* getChats() {
  try {
    yield delay(1000);
    yield put({type: 'GET_CHATS', payload: messages});
  } catch (e) {
    yield put({type: 'CHAT_ERROR', e});
  }
}

// export function* watchchat() {
//   // Take Last Action Only
//   yield call('GET_CHATS', getChats);
// }

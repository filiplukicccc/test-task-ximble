import { takeLatest } from 'redux-saga/effects';
import { SERVICES_FETCH_REQUESTED } from '../actions/types';
import { fetchServicesSaga } from './servicesSagas';

function* rootSaga() {
  yield takeLatest(SERVICES_FETCH_REQUESTED, fetchServicesSaga);
}

export default rootSaga;
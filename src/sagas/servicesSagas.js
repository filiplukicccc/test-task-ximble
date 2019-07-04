import { call, put } from 'redux-saga/effects';
import { servicesFetchSuccessed, servicesFetchFailed } from '../actions/services';
import api from '../api/api';

export function* fetchServicesSaga() {
  try {
    const services = yield call(api.services.fetchServices);
    yield put(servicesFetchSuccessed(services));
  }
  catch (err) {
    yield put(servicesFetchFailed(err.response));
  }
}
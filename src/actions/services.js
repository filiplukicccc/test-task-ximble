// @flow
import { SERVICES_FETCH_REQUESTED, SERVICES_FETCH_SUCCESSED, SERVICES_FETCH_FAILED } from './types';

export const servicesFetchRequested = () => ({
  type: SERVICES_FETCH_REQUESTED
});

export const servicesFetchSuccessed = (payload: {}) => ({
  type: SERVICES_FETCH_SUCCESSED,
  payload
});

export const servicesFetchFailed = (errors: {}) => ({
  type: SERVICES_FETCH_FAILED,
  errors
});

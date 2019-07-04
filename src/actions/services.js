// @flow
import { SERVICES_FETCH_REQUESTED, SERVICES_FETCH_SUCCESSED, SERVICES_FETCH_FAILED, BONUS_ACTIVE } from './types';

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

export const bonusActive = (payload: string) => ({
  type: BONUS_ACTIVE,
  payload
});
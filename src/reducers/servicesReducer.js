import { SERVICES_FETCH_SUCCESSED } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case SERVICES_FETCH_SUCCESSED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
};
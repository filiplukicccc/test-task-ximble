import { CHANGE_LANGUAGE } from '../actions/types';

export default function (state = { lang: 'en' }, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.payload
      }
    default:
      return state
  }
};
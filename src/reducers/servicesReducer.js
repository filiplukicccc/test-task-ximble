import { SERVICES_FETCH_SUCCESSED, BONUS_ACTIVE } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case SERVICES_FETCH_SUCCESSED:
      return {
        ...state,
        ...action.payload
      }
    case BONUS_ACTIVE:
      return {
        ...state,
        bonuses: state.bonuses.map((item) => {
          return (
            item.title === action.payload ? ({ ...item, bonus: true }) : item
          )
        })
      }
    default:
      return state
  }
};
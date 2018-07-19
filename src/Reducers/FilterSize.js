import { Carts } from '../data'
import { FILTER } from '../Actions/types'

export default (state = Carts, action) => {
  switch(action.type) {
    case FILTER:
      return [...state].filter((item) => {
        return item.size === action.size
      });
    default:
      return state;
  }
};
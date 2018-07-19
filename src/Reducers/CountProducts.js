import {
  INCREMENT_PRODUCT_IN_BASKET,
  DECREMENT_PRODUCT_IN_BASKET
} from '../Actions/types'

export default (state = 0, action) => {
  switch(action.type) {
    case INCREMENT_PRODUCT_IN_BASKET:
      return state + 1;
    case DECREMENT_PRODUCT_IN_BASKET:
      return state - 1;
    default:
      return state;
  }
}
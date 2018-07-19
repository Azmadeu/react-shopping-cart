import {
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT
} from '../Actions/types'

export default (state = 0, action) => {
  switch(action.type) {
    case INCREMENT_PRODUCT:
      return state + 1;
    case DECREMENT_PRODUCT:
      return state - 1;
  }
}
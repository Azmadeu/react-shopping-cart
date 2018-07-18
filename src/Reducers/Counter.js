import {
  INCREMENT_IN_BASKET,
  DECREMENT_IN_BASKET
} from '../Actions/types'

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_IN_BASKET:
      return state + 1;
    case DECREMENT_IN_BASKET:
      return (state === 0 ? state : state - 1);
    default:
      return state;
  }
};

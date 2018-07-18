import {
  ADD_CART,
  REMOVE_CART
} from '../Actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.cart]; // [...state, CART_NAME]
    case REMOVE_CART:
      return []; // with methods splice & concat
    default:
      return state;
  }
};



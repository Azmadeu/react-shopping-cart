import {
  ADD_CART,
  REMOVE_CART
} from '../Actions/types'

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      const addedElem = action.products.find(item => +item.id === +action.id);
      return [...state, addedElem];
    case REMOVE_CART:
      const removedElem = action.products.find(item => +item.id === +action.id);
      const index = [...state].indexOf(removedElem);
      return state.slice(0, index).concat(state.slice(index + 1, state.length));
    default:
      return state;
  }
};



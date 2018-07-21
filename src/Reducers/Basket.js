import {
  ADD_CART,
  REMOVE_CART
} from '../Actions/types'

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      const addedElem = action.products.find(item => +item.id === +action.id);
      if (state.includes(addedElem)) {
        let index = state.indexOf(addedElem);
        ++state[index].quantity;
        state[index].price.total += +(state[index].price.dollars + state[index].price.cents);
        return [...state];
      }
      return [...state, addedElem];
    case REMOVE_CART:
      const removedElem = action.products.find(item => +item.id === +action.id);
      const index = state.indexOf(removedElem);
      state[index].quantity = 1;
      return state.slice(0, index).concat(state.slice(index + 1, state.length));
    default:
      return state;
  }
};



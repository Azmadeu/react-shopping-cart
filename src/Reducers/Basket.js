import {
  ADD_CART,
  REMOVE_CART
} from '../Actions/types'

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      const addedElem = action.Array.find(item => +item.id === +action.targetId);
      return [...state, addedElem];
    case REMOVE_CART:
      const removedElem = 0;
      return
      // return [...state].slice(+action.targetId, 1).concat([...state].slice(+action.targetId + 1));
    default:
      return state;
  }
};



import {
  ADD_CART,
  REMOVE_CART
} from '../Actions/types'

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      // let elem;
      //   let i = action.Array.length;
      //   while (i--) {
      //     if (action.Array[i].model === action.targetID) {
      //       elem = action.Array[i];
      //     }
      //   }
      const elem = action.Array.find(item => item.model === action.targetID);
      return [...state, elem];
    case REMOVE_CART:
      return []; //[...state].slice(action.id, 1).concat([...state].slice(action.id + 1));
    default:
      return state;
  }
};



import { Carts } from '../data'
import { FILTER } from '../Actions/types'

export default (state = Carts, action) => {
  switch(action.type) {
    case FILTER:
      state = Carts;
      const filteredBar = state.filter((item) => {
        return action.size.includes(item.size);
      });
      return filteredBar.length === 0 ? state : filteredBar;
    default:
      return state;
  }
};
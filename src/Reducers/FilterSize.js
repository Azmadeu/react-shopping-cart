import {Carts} from '../data'
import {
  DEFAULT_SORT,
  FILTER,
  SORT_TO_HIGHEST,
  SORT_TO_LOWEST,
} from '../Actions/types'

const sortToLowest = (itemA, itemB) => {
  return itemB.price.total - itemA.price.total;
};

const sortToHighest = (itemA, itemB) => {
  return itemA.price.total - itemB.price.total;
};

const defaultSort = (itemA, itemB) => {
  return Math.random() > 0.5 ? itemA.price.total - itemB.price.total : itemB.price.total - itemA.price.total
};



export default (state = Carts, action) => {
  switch (action.type) {
    case FILTER:
      state = Carts;
      const filteredBar = state.filter((item) => {
        return action.size.includes(item.size);
      });
      return filteredBar.length === 0 ? state : filteredBar;
    case SORT_TO_HIGHEST:
      return [...state].sort(sortToHighest);
    case SORT_TO_LOWEST:
      return [...state].sort(sortToLowest);
    case DEFAULT_SORT:
      return [...state].sort(defaultSort);
    default:
      return state;
  }
};
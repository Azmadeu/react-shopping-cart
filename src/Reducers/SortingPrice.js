import {
  SHOW_SORT_TYPE
} from '../Actions/types'

const sortType = 'select';

export default (state = sortType, action) => {
  switch(action.type) {
    case SHOW_SORT_TYPE:
      return action.sortType;
    default:
      return state;
  }
};
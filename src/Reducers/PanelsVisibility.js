import {
  OPEN_PANEL,
  TOGGLE_PANEL
} from '../Actions/types'

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_PANEL:
      return !state;
    case OPEN_PANEL:
      return true;
    default:
      return state;
  }
};

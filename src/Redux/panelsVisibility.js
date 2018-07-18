export const isOpenAction = () => {
  return {
    type: 'TOGGLE_PANEL',
  }
};

export const openPanelAction = () => {
  return {
    type: 'OPEN_PANEL'
  }
};

export const panelsVisibility = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PANEL':
      return !state;
    case 'OPEN_PANEL':
      return true;
    default:
      return state;
  }
};

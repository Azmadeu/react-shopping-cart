export const incAction = () => {
  return {
    type: 'INCREMENT'
  }
};

export const decAction = () => {
  return {
    type: 'DECREMENT'
  }
};

export const Counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return (state === 0 ? state : state - 1);
    default:
      return state;
  }
};

import {createStore, combineReducers} from 'redux';
import {Counter, decAction, incAction} from './Counter'
import {panelsVisibility, isOpenAction, openPanelAction} from './panelsVisibility';
// статические методы.
// в ес5 ес6.
// Чем отличаются от обычных методов?
// где как и для чего используются статические методы

export const mapStateToProps = (state) => {
  return {reducer: state};
};

export const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(incAction())
    },
    decrement: () => {
      dispatch(decAction())
    },
    isOpen: () => {
      dispatch(isOpenAction())
    },
    openPanel: () => {
      dispatch(openPanelAction())
    }
  }
};

const rootReducer = combineReducers({Counter, panelsVisibility});

export const store = createStore(rootReducer);



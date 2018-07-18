import { Carts } from '../data/index'
import {
  TOGGLE_PANEL,
  OPEN_PANEL,
  INCREMENT_IN_BASKET,
  DECREMENT_IN_BASKET,
  ADD_CART,
  REMOVE_CART
} from './types'

export const isOpenAction = () => {
  return {
    type: TOGGLE_PANEL,
  }
};

export const openPanelAction = () => {
  return {
    type: OPEN_PANEL
  }
};

export const incAction = () => {
  return {
    type: INCREMENT_IN_BASKET
  }
};

export const decAction = () => {
  return {
    type: DECREMENT_IN_BASKET
  }
};

export const addCartAction = (targetID) => {
  return {
    type: ADD_CART,
    targetID: targetID,
    Array: Carts
  }
};

export const removeCartAction = (targetID) => {
  return {
    type: REMOVE_CART,
    targetID: targetID,
  }
};
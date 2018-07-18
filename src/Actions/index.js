import { Carts } from '../data/index'
import {
  TOGGLE_PANEL,
  OPEN_PANEL,
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

export const addCartAction = (targetId) => {
  return {
    type: ADD_CART,
    targetId: targetId,
    Array: Carts
  }
};

export const removeCartAction = (targetId) => {
  return {
    type: REMOVE_CART,
    targetId: targetId,
  }
};
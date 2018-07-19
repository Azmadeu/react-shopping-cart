import  { Carts }  from '../Reducers/FilterSize'
import {
  TOGGLE_PANEL,
  OPEN_PANEL,
  ADD_CART,
  REMOVE_CART,
  FILTER
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

export const addCartAction = (id) => {
  return {
    type: ADD_CART,
    id: id,
    products: Carts
  }
};

export const removeCartAction = (id) => {
  return {
    type: REMOVE_CART,
    id: id,
    products: Carts
  }
};

export const filterAction = (size) => {
  return {
    type: FILTER,
    size: size
  }
};
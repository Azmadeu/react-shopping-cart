import {Carts} from '../data'
import {
  TOGGLE_PANEL,
  OPEN_PANEL,
  ADD_CART,
  REMOVE_CART,
  FILTER,
  SORT_TO_LOWEST,
  SORT_TO_HIGHEST,
  DEFAULT_SORT,
  SHOW_SORT_TYPE,
  CLOSE_PANEL,
  INCREMENT_PRODUCT_IN_BASKET,
  DECREMENT_PRODUCT_IN_BASKET
} from './types'

export const closePanelAction = () => {
  return {
    type: CLOSE_PANEL
  }
};

export const isOpenAction = () => {
  return {
    type: TOGGLE_PANEL
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
    size: size,
  }
};

export const sortToLowestAction = () => {
  return {
    type: SORT_TO_LOWEST,

  }
};

export const sortToHighestAction = () => {
  return {
    type: SORT_TO_HIGHEST
  }
};

export const showSortTypeAction = (sortType) => {
  return {
    type: SHOW_SORT_TYPE,
    sortType: sortType
  }
};

export const defaultSortAction = () => {
  return {
    type: DEFAULT_SORT
  }
};

export const incProductAction = () => {
  return {
    type: INCREMENT_PRODUCT_IN_BASKET
  }
};

export const decProductAction = (quantity) => {
  return {
    type: DECREMENT_PRODUCT_IN_BASKET,
    quantity: quantity
  }
};
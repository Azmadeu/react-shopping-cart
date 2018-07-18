import Counter from './Counter'
import panelsVisibility from './panelsVisibility';
import Basket from './Basket';
import { createStore, combineReducers } from 'redux';

const Reducer = combineReducers({Counter, panelsVisibility, Basket});

export const store = createStore(Reducer);

// статические методы, ec5, ec6,
// чем отличаются об обычных методов и примеры использования.


import { combineReducers } from '@reduxjs/toolkit';
import { productsApi } from '../services/products';
import { cartReducer } from './cart/slice';

export default combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: cartReducer,
});

import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../services/api";
import { cartReducer } from "./cart/slice";
import { authReducer } from "./auth/slice";

export default combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  cart: cartReducer,
  auth: authReducer,
});

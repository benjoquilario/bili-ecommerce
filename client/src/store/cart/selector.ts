import { RootState } from "../store";
import { IProduct } from "../types";

export const selectCart = (state: RootState): IProduct[] => state.cart.cartList;
export const selectCount = (state: RootState): number => state.cart.count;
export const selectTotalItems = (state: RootState): number =>
  state.cart.totalItems;
export const selectTotalPrice = (state: RootState): number =>
  state.cart.totalPrice;

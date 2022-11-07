import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IShipping } from '../types';
import { ICartState } from '../types';

const initialState: ICartState = {
  count: 0,
  cartList: [],
  totalItems: 0,
  totalPrice: 0,
  shippingAddress: {
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    location: '',
  },
};

const sumTotal = (item: IProduct[]) =>
  item.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

const totalItems = (item: IProduct[]) =>
  item.reduce((acc, curr) => acc + curr.quantity, 0);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartAddItem: (state: ICartState, action: PayloadAction<IProduct>) => {
      const item = action.payload;
      const existItem = state.cartList.find(x => x._id === item._id);

      if (existItem) {
        state.cartList = state.cartList.map(cart =>
          cart._id === existItem._id ? item : cart
        );
      } else {
        state.count += 1;
        state.cartList = [...state.cartList, item];
      }

      state.totalPrice = sumTotal(state.cartList);
      state.totalItems = totalItems(state.cartList);
    },
    removeItem: (state: ICartState, action: PayloadAction<IProduct>) => {
      const item = action.payload;
      state.count -= 1;
      state.cartList = state.cartList.filter(x => x._id !== item._id);
      state.totalPrice = sumTotal(state.cartList);
      state.totalItems = totalItems(state.cartList);
    },
    clearCart: (state: ICartState) => {
      state.cartList = [];
      state.count = 0;
      state.totalPrice = 0;
      state.totalItems = 0;
    },
    shipping: (state: ICartState, action: PayloadAction<IShipping>) => {
      state.shippingAddress = action.payload;
    },
    resetShipping: (state: ICartState) => {
      state.shippingAddress = initialState.shippingAddress;
    },
  },
});

export const { cartAddItem, removeItem, clearCart, shipping, resetShipping } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;

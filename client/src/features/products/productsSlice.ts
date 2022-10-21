import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store/store';
// import type { RootState } from '../../app/store';

interface IState {
  loading: boolean;
  products: [];
  error: string | undefined;
}

const initialState: IState = {
  loading: false,
  products: [],
  error: '',
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const response = await axios.get('http://localhost:5000/api/products');
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

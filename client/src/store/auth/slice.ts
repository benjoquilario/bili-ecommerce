import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { authUser } = authSlice.actions;
export const authReducer = authSlice.reducer;

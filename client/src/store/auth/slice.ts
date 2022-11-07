import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  _id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
  token: string;
}

interface IUserState {
  user?: IUser;
}

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload?.data;
    },
    logout: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { authUser, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

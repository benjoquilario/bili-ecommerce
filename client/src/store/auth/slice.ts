import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  _id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
  token: string;
}

interface IUserState {
  user?: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state: IUserState, action) => {
      state.user = action.payload?.data;
    },
    logout: (state: IUserState) => {
      state.user = null;
    },
  },
});

export const { authUser, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

import { RootState } from "../store";

export const selectUser = (state: RootState) => state.auth.user;

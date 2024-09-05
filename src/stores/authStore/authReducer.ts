import { ICurrentUser } from "@/types/auth/AuthType";
import getAccessToken from "@/utils/Functions/getAccessToken";
import { createSlice } from "@reduxjs/toolkit";
import { authThunks } from "./authThunks";
import { deleteCookie } from "@/utils/cookies";

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  currentUser: ICurrentUser | null;
}

const initialState: AuthState = {
  token: getAccessToken()?.toString() || null,
  isAuthenticated: false,
  loading: false,
  error: null,
  currentUser: null,
};

export const AuthSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.currentUser = null;
      deleteCookie("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authThunks.getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(authThunks.getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload.data;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(authThunks.getCurrentUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const authAction = {
  ...AuthSlice.actions,
  ...authThunks,
};

export default AuthSlice.reducer;

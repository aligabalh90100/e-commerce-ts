import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../types/types";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";

type TAuth = {
  user: {
    firstName: string;
    lastName: string;
    id: number;
    email: string;
  } | null;
  loading: TLoading;
  error: string | null;
  accessToken: string | null;
};
const initialState: TAuth = {
  loading: "idle",
  error: null,
  accessToken: null,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUi(state) {
      state.loading = "idle";
      state.error = null;
    },
    resetError(state) {
      state.error = null;
    },
    authLogout(state) {
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    // register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";

      if (typeof action.payload == "string") {
        state.error = action.payload;
      }
    });
    // login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";

      if (typeof action.payload == "string") {
        state.error = action.payload;
      }
    });
  },
});
export default authSlice.reducer;
export const authActions = authSlice.actions;

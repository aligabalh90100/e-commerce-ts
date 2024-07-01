import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TProduct } from "../../types/types";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { authActions } from "../auth/authSlice";

type TWishlist = {
  itemsId: number[];
  prdouctsInfo: TProduct[];
  error: null | string;
  loading: TLoading;
};
const initialState: TWishlist = {
  itemsId: [],
  prdouctsInfo: [],
  error: null,
  loading: "idle",
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    productFullInfoClean(state) {
      state.prdouctsInfo = [];
    },
    // resetWishlist(state) {
    //   state.itemsId = [];
    //   state.prdouctsInfo = [];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload.type == "add") {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((id) => id !== action.payload.id);

        state.prdouctsInfo = state.prdouctsInfo.filter(
          (el) => el.id !== action.payload.id
        );
      }
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload == "string") {
        state.error = action.payload;
      }
    });
    // actGetWishlist
    builder.addCase(actGetWishlist.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.prdouctsInfo = action.payload;
      state.itemsId = action.payload.map((el) => el.id as number);
      state.loading = "succeeded";
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload == "string") {
        state.error = action.payload;
      }
    });
    // reset
    builder.addCase(authActions.authLogout, (state) => {
      state.itemsId = [];
      state.prdouctsInfo = [];
      state.loading = "idle";
    });
  },
});

export default wishlistSlice.reducer;
export const wishlistActions = wishlistSlice.actions;

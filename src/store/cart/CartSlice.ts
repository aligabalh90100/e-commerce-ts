import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TProduct } from "../../types/types";
import actGetCartProducts from "./act/actGetProducts";
type CartType = {
  items: { [key: string]: number };
  productInfo: TProduct[];
  loading: TLoading;
  error: null | string;
};
const initialState: CartType = {
  items: {},
  productInfo: [],
  loading: "idle",
  error: null,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items[action.payload];
      if (existingProduct) {
        state.items[action.payload]++;
      } else {
        state.items[action.payload] = 1;
      }
    },
    cartItemChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    removeCartItem: (state, action) => {
      delete state.items[action.payload];
      state.productInfo = state.productInfo.filter(
        (el) => el.id !== action.payload
      );
    },
    productFullInfoClean(state) {
      state.productInfo = [];
    },
    clearCartAfterOrder(state) {
      state.productInfo = [];
      state.items = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCartProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCartProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productInfo = action.payload;
    });
    builder.addCase(actGetCartProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default CartSlice.reducer;
export const CartActions = CartSlice.actions;

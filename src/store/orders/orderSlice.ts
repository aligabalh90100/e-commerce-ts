import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TOrder } from "../../types/types";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetOrders from "./act/actGetOrders";

type TOrderSlice = {
  loading: TLoading;
  error: string | null;
  orderList: TOrder[];
};
const initialState: TOrderSlice = {
  loading: "idle",
  error: null,
  orderList: [],
};
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearPlaceOrderState(state) {
      state.loading = "idle";
      state.error = null;
      state.orderList = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload == "string") {
        state.error = action.payload;
      }
    });
    // getOrders
    builder.addCase(actGetOrders.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetOrders.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.orderList = action.payload;
    });
    builder.addCase(actGetOrders.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload == "string") {
        state.error = action.payload;
      }
    });
  },
});

export default orderSlice.reducer;
export const orderActions = orderSlice.actions;

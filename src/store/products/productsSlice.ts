import { createSlice } from "@reduxjs/toolkit";
import actGetProductByCatPrefix from "./act/actGetProductByCatPrefix";
import { TLoading, TProduct } from "../../types/types";
interface ProductState {
  record: TProduct[];
  loading: TLoading;
  error: string | null;
}
const initialState: ProductState = {
  record: [],
  loading: "idle",
  error: null,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUp: (state) => {
      state.record = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductByCatPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      // state.record = action.payload.products;
      state.record = action.payload;
    });
    builder.addCase(actGetProductByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default productSlice.reducer;
export const productAction = productSlice.actions;

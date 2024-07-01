import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../API/axios-global";
import { RootState } from "../../store";

import { TProduct } from "../../../types/types";
import handleFetchingError from "../../../utils/handleFetchingError";

const actGetCartProducts = createAsyncThunk(
  "cart/actGetCartProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;
    const { CartSlice } = getState() as RootState;
    const url = Object.keys(CartSlice.items).join("&id=");
    if (!url.length) {
      // fulfilledWithValue is used in success case
      return fulfillWithValue([]);
    }
    try {
      const response = await baseUrl.get<TProduct[]>("products?id=" + url);
      return response.data;
    } catch (error) {
      return rejectWithValue(handleFetchingError(error));
      // if (axios.isAxiosError(error)) {
      //   return rejectWithValue(error.response?.data.message || error.message);
      // } else {
      //   return rejectWithValue("An unexpected error");
      // }
    }
  }
);

export default actGetCartProducts;

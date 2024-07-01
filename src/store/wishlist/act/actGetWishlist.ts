import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "../../../types/types";
import baseUrl from "../../../API/axios-global";
import handleFetchingError from "../../../utils/handleFetchingError";
import { RootState } from "../../store";

type TResponse = TProduct[];
const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishList",
  async (_, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue, getState } = thunkAPI;
    const { authSlice } = getState() as RootState;

    try {
      const userWishList = await baseUrl.get<{ productId: number }[]>(
        `/wishlist?userId=${authSlice.user?.id}`
      );
      if (!userWishList.data.length) {
        return fulfillWithValue([]);
      }
      const url = userWishList.data.map((el) => `id=${el.productId}`).join("&");
      const response = await baseUrl.get<TResponse>("/products?" + url);
      return response.data;
    } catch (error) {
      console.log("async failed");
      return rejectWithValue(handleFetchingError(error));

      // if (axios.isAxiosError(error)) {
      //   return rejectWithValue(error.response?.data.message || error.message);
      // } else {

      //   return rejectWithValue("An unexpected error");
      // }
    }
  }
);

export default actGetWishlist;

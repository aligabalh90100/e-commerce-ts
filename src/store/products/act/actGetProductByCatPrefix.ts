import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "../../../types/types";
import baseUrl from "../../../API/axios-global";
import handleFetchingError from "../../../utils/handleFetchingError";
type TResponse = TProduct[];
// this give 3 extra reducers for all cases maybe happens success,failed,pending
const actGetProductByCatPrefix = createAsyncThunk(
  "product/actGetProduct",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      // signal to cancel request if back while sending reuqest while fetching data we store response then do response.abort()
      const response = await baseUrl.get<TResponse>(
        `products?cat_prefix=${prefix}`,
        { signal }
      );

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

export default actGetProductByCatPrefix;

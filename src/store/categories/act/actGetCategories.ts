import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "../../../types/types";
import baseUrl from "../../../API/axios-global";
import handleFetchingError from "../../../utils/handleFetchingError";

type TResponse = TCategory[];
// this give 3 extra reducers for all cases maybe happens success,failed,pending
const actGetCategories = createAsyncThunk(
  "categories/actGetCategoris",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await baseUrl.get<TResponse>("categories", { signal });

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

export default actGetCategories;

import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../API/axios-global";

import handleFetchingError from "../../../utils/handleFetchingError";
import { RootState } from "../../store";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { authSlice } = getState() as RootState;

    try {
      const isRecordExist = await baseUrl.get(
        `wishlist?userId=${authSlice.user?.id}&productId=${id}`
      );

      if (isRecordExist.data.length > 0) {
        await baseUrl.delete(`wishlist/${isRecordExist.data[0].id}`);
        return { type: "remove", id };
      } else {
        await baseUrl.post(`wishlist/`, {
          userId: authSlice.user?.id,
          productId: id,
        });
        return { type: "add", id };
      }
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
export default actLikeToggle;

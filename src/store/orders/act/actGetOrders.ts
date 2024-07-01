import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import handleFetchingError from "../../../utils/handleFetchingError";
import baseUrl from "../../../API/axios-global";
import { TOrder } from "../../../types/types";
type TResponse = TOrder[];
const actGetOrders = createAsyncThunk("actGetProducts", async (_, ThunkApi) => {
  const { rejectWithValue, signal, getState } = ThunkApi;
  const { authSlice } = getState() as RootState;
  const userId = authSlice.user?.id;
  try {
    const res = await baseUrl.get<TResponse>(`/orders?userId=${userId}`, {
      signal,
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(handleFetchingError(error));
  }
});
export default actGetOrders;

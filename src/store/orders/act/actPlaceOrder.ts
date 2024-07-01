import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import handleFetchingError from "../../../utils/handleFetchingError";
import baseUrl from "../../../API/axios-global";

const actPlaceOrder = createAsyncThunk(
  "actPlaceOrder",
  async (subTotal: number, ThunkApi) => {
    const { rejectWithValue, getState } = ThunkApi;
    const { CartSlice, authSlice } = getState() as RootState;
    const orderItems = CartSlice.productInfo.map((el) => ({
      title: el.title,
      id: el.id,
      img: el.img,
      price: el.price,
      qunatity: CartSlice.items[el.id as number],
    }));

    try {
      const res = await baseUrl.post(`/orders`, {
        userId: authSlice.user?.id,
        items: orderItems,
        subTotal,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(handleFetchingError(error));
    }
  }
);

export default actPlaceOrder;

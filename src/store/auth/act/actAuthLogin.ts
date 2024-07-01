import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../API/axios-global";
import handleFetchingError from "../../../utils/handleFetchingError";
type TFormData = {
  email: string;
  password: string;
};

type TResponse = {
  accessToken: string;
  user: { email: string; firstName: string; lastName: string; id: number };
};
const actAuthLogin = createAsyncThunk(
  "actAuthLogin",
  async (formData: TFormData, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;

    try {
      const res = await baseUrl.post<TResponse>(`/login`, formData);
      return res.data;

      return res.data;
    } catch (error) {
      return rejectWithValue(handleFetchingError(error));
    }
  }
);
export default actAuthLogin;

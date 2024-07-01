import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../API/axios-global";
import handleFetchingError from "../../../utils/handleFetchingError";
type TFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
const actAuthRegister = createAsyncThunk(
  "actAuthRegister",
  async (formData: TFormData, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;
    try {
      const res = await baseUrl.post("/register", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(handleFetchingError(error));
    }
  }
);
export default actAuthRegister;

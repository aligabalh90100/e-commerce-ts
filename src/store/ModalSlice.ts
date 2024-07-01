import { createSlice } from "@reduxjs/toolkit";
type TModal = {
  showModal: boolean;
  ListOrder: boolean;
};
const initialState: TModal = {
  showModal: false,
  ListOrder: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModel(state) {
      state.showModal = !state.showModal;
    },
    toggleListOrder(state) {
      state.ListOrder = !state.ListOrder;
    },
  },
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;

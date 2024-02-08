import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const partCSlice = createSlice({
  name: "part-c",
  initialState,
  reducers: {
    addPC(state, action) {
      state.name = action.payload;
    },
  },
});

export const { addPC } = partCSlice.actions;

export default partCSlice.reducer;

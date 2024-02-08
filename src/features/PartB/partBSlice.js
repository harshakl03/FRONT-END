import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const partBSlice = createSlice({
  name: "part-b",
  initialState,
  reducers: {
    addPB(state, action) {
      state.name = action.payload;
    },
  },
});

export const { addPB } = partBSlice.actions;

export default partBSlice.reducer;

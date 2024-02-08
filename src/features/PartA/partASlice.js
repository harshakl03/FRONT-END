import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const partASlice = createSlice({
  name: "part-a",
  initialState,
  reducers: {
    addPA(state, action) {
      state.name = action.payload;
    },
  },
});

export const { addPA } = partASlice.actions;

export default partASlice.reducer;

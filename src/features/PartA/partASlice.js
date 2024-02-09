import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  vtu_id: "",
  full_name: "",
  father_name: "",
  mother_name: "",
  mobile: 0,
  emergency_mobile: 0,
  pad: "",
  email_address: "",
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

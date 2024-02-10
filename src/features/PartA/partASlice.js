import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: { value: "", required: true },
  vtu_id: { value: "", required: true },
  full_name: { value: "", required: true },
  father_name: { value: "", required: false },
  mother_name: { value: "", required: false },
  mobile: { value: 0, required: true },
  emergency_mobile: { value: "", required: true },
  pad: { value: "", required: true },
  email_address: { value: "", required: true },
};

const partASlice = createSlice({
  name: "part-a",
  initialState,
  reducers: {
    addPartA(state, action) {
      Object.keys(state).map((fields) => {
        const { value: val } = action.payload[fields];
        return (state[fields].value = val);
      });
    },
  },
});

export const { addPartA } = partASlice.actions;

export default partASlice.reducer;

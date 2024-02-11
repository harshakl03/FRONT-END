import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: { name: "Id", value: "", required: true },
  vtu_id: { name: "VTU Id", value: "", required: true },
  full_name: { name: "Full Name", value: "", required: true },
  father_name: { name: "Father Name", value: "", required: false },
  mother_name: { name: "Mother Name", value: "", required: false },
  mobile: { name: "Mobile Number", value: 0, required: true },
  emergency_mobile: {
    name: "Emergency Mobile Number",
    value: "",
    required: true,
  },
  pad: { name: "Personal Address", value: "", required: true },
  email_address: { name: "Email Address", value: "", required: true },
  aadhar: { name: "Aadhaar", value: "", required: true },
  pan_number: { name: "Pan Number", value: "", required: true },
};

const partASlice = createSlice({
  name: "part-a",
  initialState,
  reducers: {
    addPartA(state, action) {
      console.log(action);
      Object.keys(state).map(
        (field) => (state[field].value = action.payload[field])
      );
    },
  },
});

export const { addPartA } = partASlice.actions;

export default partASlice.reducer;

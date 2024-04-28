import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vtu_id: {
    label: "Enter VTU Id:",
    value: "",
    required: true,
    field: "input",
    type: "text",
  },
  full_name: {
    label: "Enter Full Name:",
    value: "",
    required: true,
    field: "input",
    type: "text",
  },
  father_name: {
    label: "Enter Father Name:",
    value: "",
    required: false,
    field: "input",
    type: "text",
  },
  mother_name: {
    label: "Enter Mother Name:",
    value: "",
    required: false,
    field: "input",
    type: "text",
  },
  mobile: {
    label: "Enter Mobile Number:",
    value: 0,
    required: true,
    field: "input",
    type: "text",
  },
  emergency_mobile: {
    label: "Enter Emergency Mobile Number:",
    value: 0,
    required: true,
    field: "input",
    type: "number",
  },
  pad: {
    label: "Enter Personal Address:",
    value: "",
    required: true,
    field: "text-area",
    type: "text",
  },
  email_address: {
    label: "Enter Email Address:",
    value: "",
    required: true,
    field: "input",
    type: "text",
  },
  pan_number: {
    label: "Enter Pan Number:",
    value: "",
    required: true,
    field: "input",
    type: "text",
  },
};

const partASlice = createSlice({
  name: "part-a",
  initialState,
  reducers: {
    addPartA(state, action) {
      Object.keys(state).map(
        (field) => (state[field].value = action.payload[field] || "")
      );
    },
  },
});

export const { addPartA } = partASlice.actions;

export default partASlice.reducer;

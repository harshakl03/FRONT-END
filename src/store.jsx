import { configureStore } from "@reduxjs/toolkit";
import partAReducer from "./features/PartA/partASlice";
import partBReducer from "./features/PartB/partBSlice";
import partCReducer from "./features/PartC/partCSlice";

const store = configureStore({
  reducer: {
    partA: partAReducer,
    partB: partBReducer,
    partC: partCReducer,
  },
});

export default store;

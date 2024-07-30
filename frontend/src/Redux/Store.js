import { configureStore } from "@reduxjs/toolkit";
import ownerSignupReducer from "./ownerSignupSlice";
import authReducer from "./authSlice";
import employeeReducer from "./employeeSlice";
import shiftReducer from "./shiftSlice";
import employeeSignupReducer from "./employeeSignupSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    employees: employeeReducer,
    employeeSignup: employeeSignupReducer,
    ownerSignup: ownerSignupReducer,
    shifts: shiftReducer,
  },
});

export default store;

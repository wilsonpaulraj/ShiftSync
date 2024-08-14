import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  countryCode: "",
  password: "",
  employeeID: "",
  department: "",
  managerID: "",
  organizationName: "",
  confirmPassword: "",
  employeeRole: "",
  role: "Employee", // Default role for employees
};

const employeeSignupSlice = createSlice({
  name: "employeeSignup",
  initialState,
  reducers: {
    updateEmployeeFormData: (state, action) => {
      const { payload } = action;
      for (const key in payload) {
        if (typeof payload[key] === "object" && payload[key] !== null) {
          state[key] = { ...state[key], ...payload[key] };
        } else {
          state[key] = payload[key];
        }
      }
    },
    resetEmployeeFormData: () => initialState,
  },
});

export const { updateEmployeeFormData, resetEmployeeFormData } =
  employeeSignupSlice.actions;

export default employeeSignupSlice.reducer;

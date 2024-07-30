import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  employeeID: "",
  department: "",
  managerName: "",
  organizationName: "",
  employeeRole: "",
  role: "Employee",
  confirmPassword: "",
};

const employeeSignupSlice = createSlice({
  name: "employeeSignup",
  initialState,
  reducers: {
    updateEmployeeFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetEmployeeFormData: () => initialState,
  },
});

export const { updateEmployeeFormData, resetEmployeeFormData } =
  employeeSignupSlice.actions;

export default employeeSignupSlice.reducer;

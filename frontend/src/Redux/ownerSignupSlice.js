import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  businessType: "",
  organizationName: "",
  organizationAddress: "",
  phone: "",
  password: "",
  role: "Manager",
  employeeList: [],
};

const ownerSignupSlice = createSlice({
  name: "ownerSignup",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormData: () => initialState,
  },
});

export const { updateFormData, resetFormData } = ownerSignupSlice.actions;

export default ownerSignupSlice.reducer;

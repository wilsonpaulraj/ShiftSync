import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  businessType: "",
  organizationName: "",
  organizationAddress: "",
  phone: "",
  countryCode: "",
  password: "",
  role: "Manager",
  confirmPassword: "",
  managerID: ""
};

const ownerSignupSlice = createSlice({
  name: "ownerSignup",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { payload } = action;
      // Ensure nested updates are handled properly
      for (const key in payload) {
        if (typeof payload[key] === "object" && payload[key] !== null) {
          state[key] = { ...state[key], ...payload[key] };
        } else {
          state[key] = payload[key];
        }
      }
    },
    resetFormData: () => initialState,
  },
});

export const { updateFormData, resetFormData } = ownerSignupSlice.actions;

export default ownerSignupSlice.reducer;

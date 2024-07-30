import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  role: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.role = "";
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

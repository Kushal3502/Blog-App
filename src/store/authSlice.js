import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

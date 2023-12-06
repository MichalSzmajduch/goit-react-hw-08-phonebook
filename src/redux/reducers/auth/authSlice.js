import { currentUser, login, logout, register } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state, action) => initialState)
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, () => initialState);
  },
});

export const authReducer = authSlice.reducer;

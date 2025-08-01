// src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit'

const savedUser = JSON.parse(localStorage.getItem('user')) || null;

const userSlice = createSlice({
  name: 'user',
  initialState: savedUser,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      return action.payload;
    },
    logoutUser: () => {
      localStorage.removeItem('user');
      return null;
    }
  }
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

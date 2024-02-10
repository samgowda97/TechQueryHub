import { createSlice } from '@reduxjs/toolkit';

const initialState = null; 

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      return action.payload;
    },
    logoutUser(state, action) {
      return null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

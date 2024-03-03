import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../utils/interface';

 
const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
    registerAction: (state, action: PayloadAction<string >) => {
      
      state.isAuthenticated = true;
      state.token = action.payload;  
    },
  },
});

export const { loginAction, logout,registerAction } = authSlice.actions;
export default authSlice.reducer;

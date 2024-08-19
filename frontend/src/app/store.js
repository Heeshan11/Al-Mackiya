import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import stdReducer from '../features/studentAuth/studentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    student:stdReducer
  },
});

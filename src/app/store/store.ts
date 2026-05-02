import userReducer from "@/entities/auth/store/userSlice";
import { configureStore } from "@reduxjs/toolkit/react";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

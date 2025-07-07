// store.ts
import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./carSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    car: carSlice,
    user: userSlice,
  },
});

// Types for usage in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

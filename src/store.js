import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

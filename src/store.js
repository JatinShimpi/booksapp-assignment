// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi"; // Adjust the path accordingly
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    // Add the userApi reducer
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

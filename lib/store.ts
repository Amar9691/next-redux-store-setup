"use client";
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = returnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

"use client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./store";

const store = configureStore({
  reducer: {
    dataTsoy: booksReducer,
  },
});

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

"use client";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import langCZ from "./lang/langCZ";
import langEN from "./lang/langEN";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "CZ",
    translations: { 
      EN: langEN,
      CZ: langCZ
    },
  },
  reducers: {
    toggleLanguage: (state) => {
      state.lang = state.lang === "EN" ? "CZ" : "EN";
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;

export const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

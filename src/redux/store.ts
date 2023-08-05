import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./reducers/CategorySlice";
import { noteReducer } from "./reducers/NoteSlice";
import { modalReducer } from "./reducers/ModalSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    notes: noteReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

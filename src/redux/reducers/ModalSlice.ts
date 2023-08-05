import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Modal {
  open: boolean;
  mode: "create" | "edit";
  noteId: string;
}

interface InitialState {
  modal: Modal;
}

const initState: InitialState = {
  modal: { open: true, mode: "create", noteId: "" },
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ mode: "create" | "edit"; noteId: string }>
    ) => {
      state.modal.open = true;
      state.modal.mode = action.payload.mode;
      state.modal.noteId = action.payload.noteId;
    },
    closeModal: (state) => {
      state.modal.open = false;
      state.modal.noteId = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const getModalState = (state: RootState) => state.modal.modal;

export const modalReducer = modalSlice.reducer;

import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Note } from "../../models/Note";
import { CreateNoteDTO } from "../../models/dto/CreateNoteDTO";
import { parseDates } from "../../utils/parseDates";
import { EditNoteDTO } from "../../models/dto/EditNoteDTO";
import { NoteService } from "../../services/NoteService";
import { RootState } from "../store";

interface InitState {
  items: Note[];
}

const initState: InitState = {
  items: [
    NoteService.createNote({
      name: "Shopping List",
      category: 1,
      content: "123",
    }),
    NoteService.createNote({
      name: "Shopping List",
      category: 1,
      content: "123",
    }),
    NoteService.createNote({
      name: "Shopping List",
      category: 1,
      content: "dada 12/12/2023 daasd",
    }),
    NoteService.createNote({
      name: "Shopping List",
      category: 1,
      content: "123",
    }),
    NoteService.createNote({
      name: "Shopping List",
      category: 1,
      content: "123",
    }),
    NoteService.createNote({
      name: "Shopping List",
      category: 1,
      content: "123",
    }),
  ],
};

const noteSlice = createSlice({
  name: "notes",
  initialState: initState,
  reducers: {
    addNote: (state, action: PayloadAction<CreateNoteDTO>) => {
      const note: Note = NoteService.createNote(action.payload);
      state.items.push(note);
    },
    updateNote: (state, action: PayloadAction<EditNoteDTO>) => {
      const note = state.items.find((n) => n.id === action.payload.id);

      if (note) {
        note.name = action.payload.name;
        note.category = action.payload.category;
        note.content = action.payload.content;
        note.dates = parseDates(action.payload.content);
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const noteIndex = state.items.findIndex(
        (note) => note.id === action.payload
      );
      if (noteIndex !== -1) state.items.splice(noteIndex, 1);
    },
    changeNoteStatus: (state, action: PayloadAction<string>) => {
      const note = state.items.find((note) => note.id === action.payload);
      if (note) note.isActive = !note.isActive;
    },
  },
});

export const { addNote, updateNote, deleteNote, changeNoteStatus } =
  noteSlice.actions;

export const noteReducer = noteSlice.reducer;

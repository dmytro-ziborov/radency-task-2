import { nanoid } from "nanoid";
import { Note } from "../models/Note";
import { CreateNoteDTO } from "../models/dto/CreateNoteDTO";
import { parseDates } from "../utils/parseDates";

export const NoteService = {
  createNote: (noteDto: CreateNoteDTO): Note => {
    return {
      id: nanoid(),
      createdAt: new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date()),
      isActive: true,
      dates: parseDates(noteDto.content),
      ...noteDto,
    };
  },
};

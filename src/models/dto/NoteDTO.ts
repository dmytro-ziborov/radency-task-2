import { Category } from "../Category";

export interface NoteDTO {
  id: string;
  name: string;
  category: Category;
  content: string;
  dates: string[];
  isActive: boolean;
}

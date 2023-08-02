import { Categories } from "../store/notes/notesReducer";

export interface noteFormPayload {
  id?: string;
  name?: string;
  category?: Categories;
  content?: string;
}

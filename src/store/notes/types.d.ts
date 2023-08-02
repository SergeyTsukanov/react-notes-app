import { Categories } from "./notesReducer";

export type notesState = { notes: note[] };
export type note = {
  id: string;
  name: string;
  created: Date;
  category: Categories;
  content: string;
  isArchive: boolean;
  dates: string;
};

export type StatTable = {
  [key in Categories]: { archived: number; active: number };
};

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

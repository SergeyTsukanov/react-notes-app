import { AppState } from "../";
import { Categories } from "./notesReducer";
import { StatTable } from "./types";
export const selectNotes = (state: AppState) => {
  console.log(state.notesState.notes);
  return state.notesState.notes;
};
export const selectArchivedNotes = (state: AppState) => {
  console.log(state.notesState.notes);
  return state.notesState.notes.filter((note) => note.isArchive);
};
export const selectNonArchivedNotes = (state: AppState) => {
  console.log(state.notesState.notes);
  return state.notesState.notes.filter((note) => !note.isArchive);
};

export const selectStats = (state: AppState) => {
  const statTable: StatTable = {
    [Categories.IDEA]: { archived: 0, active: 0 },
    [Categories.TASK]: { archived: 0, active: 0 },
    [Categories.RANDTHOUGHT]: { archived: 0, active: 0 },
  };


  for (const note of state.notesState.notes) {
    if (note.isArchive) {
      statTable[note.category].archived += 1;
    } else {
      statTable[note.category].active += 1;
    }
  }

  return statTable;
};

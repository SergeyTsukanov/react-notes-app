import { AppState } from "../";
export const selectNotes = (state: AppState) => {
  console.log(state.notesState.notes);
  return state.notesState.notes;
};


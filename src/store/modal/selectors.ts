import { AppState } from "..";

export const selectEditNoteId = (state: AppState) => {
  return state.modalState.editNoteId;
};

export const selectIsOpen = (state: AppState) => {
  return state.modalState.isOpen;
};

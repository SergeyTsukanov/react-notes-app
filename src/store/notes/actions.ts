import { ActionCreator, AnyAction } from "redux";
import { noteActionType } from "./notesReducer";

export const createNoteAction: ActionCreator<AnyAction> = (payload) => {
  return { type: noteActionType.CreateNote, payload: payload };
};

export const deleteNoteAction: ActionCreator<AnyAction> = (id) => {
  return { type: noteActionType.RemoveNote, payload: id };
};

export const updateNoteAction: ActionCreator<AnyAction> = (payload) => {
  return { type: noteActionType.UpdateNote, payload: payload };
};

export const toggleArchiveNoteAction: ActionCreator<AnyAction> = (id) => {
  return { type: noteActionType.ToggleArchiveNote, payload: id };
};

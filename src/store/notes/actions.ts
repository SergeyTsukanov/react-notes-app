import { ActionCreator, AnyAction } from "redux";
import { noteActionType } from "./notesReducer";

export const createNoteAction: ActionCreator<AnyAction> = (payload) => {
  return { type: noteActionType.CreateNote, payload: payload };
};

export const deleteNoteAction: ActionCreator<AnyAction> = (id) => {
  return { type: noteActionType.RemoveNote, payload: id };
};

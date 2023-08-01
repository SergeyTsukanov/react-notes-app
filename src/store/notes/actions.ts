import { ActionCreator, AnyAction } from "redux";
import { noteActionType } from "./notesReducer";

export const createNoteAction: ActionCreator<AnyAction> = (payload) => {
  return { type: noteActionType.CreateNote, payload: payload };
};

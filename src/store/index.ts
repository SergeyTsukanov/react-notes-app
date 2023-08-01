import { combineReducers } from "redux";
import { notesReducer } from "./notes/notesReducer";
import { notesState } from "./notes/types";
import { modalReducer } from "./modal/modalReducer";
import { modalState } from "./modal/types";

export type AppState = {
  notesState: notesState;
  modalState: modalState;
};

export const appReducer = combineReducers({
  notesState: notesReducer,
  modalState: modalReducer,
});

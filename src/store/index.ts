import { combineReducers } from "redux";
import notesReducer from "./notes/notesReducer";
import { notesState } from "./notes/types";

export type AppState = {
  notesState: notesState;
};

export const appReducer = combineReducers({
  notesState: notesReducer,
});



import { Reducer } from "react";
import { AnyAction } from "redux";
import { modalActionType, modalState } from "./types";

const initialState: modalState = {
  isOpen: false,
  editNoteId: null,
};
export const modalReducer: Reducer<modalState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case modalActionType.modalOpen: {
      return { ...state, isOpen: true, editNoteId: action.payload };
    }
    case modalActionType.modalClose: {
      return { ...state, isOpen: false, editNoteId: null };
    }

    default:
      return state;
  }
};

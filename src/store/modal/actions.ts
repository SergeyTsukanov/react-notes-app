import { ActionCreator, AnyAction } from "redux";
import { modalActionType } from "./types";

export const openModal: ActionCreator<AnyAction> = (id) => {
  return { type: modalActionType.modalOpen, payload: id };
};

export const closeModal: ActionCreator<AnyAction> = () => {
  return { type: modalActionType.modalClose };
};

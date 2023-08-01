export type modalState = {
  isOpen: boolean;
  editNoteId: string | null;
};

export enum modalActionType {
  modalOpen="modalOpen",
  modalClose = "modalClose",
}

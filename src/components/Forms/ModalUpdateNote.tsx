import { useDispatch, useSelector } from "react-redux";
import { selectNotes } from "../../store/notes/selectors";
import { selectEditNoteId, selectIsOpen } from "../../store/modal/selectors";
import NoteForm from "./NoteForm";
import { closeModal } from "../../store/modal/actions";
import { noteFormPayload } from "./types";
import { updateNoteAction } from "../../store/notes/actions";
import Button from "../Utils/Button";

const ModalUpdateNote = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };

  const updateFormSubmit = (data: noteFormPayload) => {
    dispatch(updateNoteAction(data));
    handleClose();
  };

  const isOpen = useSelector(selectIsOpen);
  const notes = useSelector(selectNotes);
  const editdNoteId = useSelector(selectEditNoteId);

  const editNote = notes.find((note) => note.id === editdNoteId);

  return (
    <>
      {isOpen && (
        <div className="justify-center items-center inline-flex overflow-x-hidden overflow-y-auto fixed w-full h-full inset-0 z-50 outline-none bg-gray-600 bg-opacity-75 ">
          <div className="w-1/3 bg-white p-10 rounded">
            <div className="flex justify-between">
              <h4 className="text-xl mb-4">Edit Note:</h4>
              <Button backgroundColor="red" onClick={handleClose}>X</Button>
            </div>
            <NoteForm note={editNote} onSubmit={updateFormSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalUpdateNote;

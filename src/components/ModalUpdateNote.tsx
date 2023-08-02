import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes } from "../store/notes/selectors";
import { selectEditNoteId, selectIsOpen } from "../store/modal/selectors";
import NoteForm from "./NoteForm";
import { closeModal } from "../store/modal/actions";
import { noteFormPayload } from "./types";
import { updateNoteAction } from "../store/notes/actions";

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
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NoteForm note={editNote} onSubmit={updateFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateNote;

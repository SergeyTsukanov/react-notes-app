import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes } from "../store/notes/selectors";
import { selectEditNoteId, selectIsOpen } from "../store/modal/selectors";
import NoteForm from "./NoteForm";
import { closeModal, openModal } from "../store/modal/actions";

const ModalUpdateNote = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  const handleShow = () => dispatch(openModal("sas"));

  const isOpen = useSelector(selectIsOpen);
  const notes = useSelector(selectNotes);
  const editdNoteId = useSelector(selectEditNoteId);

  const editNote = notes.find((note) => note.id === editdNoteId);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NoteForm note={editNote} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateNote;

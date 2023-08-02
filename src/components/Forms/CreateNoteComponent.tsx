import { Button } from "react-bootstrap";
import NoteForm from "./NoteForm";
import { useState } from "react";
import { createNoteAction } from "../../store/notes/actions";
import { useDispatch } from "react-redux";
import { noteFormPayload } from "./types";

const CreateNoteComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const createFormSubmit = (data: noteFormPayload) => {
    dispatch(createNoteAction(data));
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen ? (
        <>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <NoteForm onSubmit={createFormSubmit} />
        </>
      ) : (
        <Button onClick={() => setIsOpen(true)}>Add note</Button>
      )}
    </div>
  );
};

export default CreateNoteComponent;

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
          <button
            className="bg-red-500 p-2 rounded text-white hover:bg-red-700 transition duration-300 mt-4"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>

          <div className="mt-4 mx-auto  w-1/3">
            <NoteForm onSubmit={createFormSubmit} />
          </div>
        </>
      ) : (
        <button
          className="bg-blue-500 p-2 rounded text-white hover:bg-blue-700 transition duration-300 mt-4"
          onClick={() => setIsOpen(true)}
        >
          Add note
        </button>
      )}
    </div>
  );
};

export default CreateNoteComponent;

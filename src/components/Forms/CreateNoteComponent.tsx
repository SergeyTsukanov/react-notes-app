import NoteForm from "./NoteForm";
import { useState } from "react";
import { createNoteAction } from "../../store/notes/actions";
import { useDispatch } from "react-redux";
import { noteFormPayload } from "./types";
import Button from "../Utils/Button";

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
                    <Button color="red" onClick={() => setIsOpen(false)}>
                        Close
                    </Button>

                    <div className="mt-4 mx-auto  w-1/3">
                        <NoteForm onSubmit={createFormSubmit} />
                    </div>
                </>
            ) : (
                <>
                    <Button color="blue" onClick={() => setIsOpen(true)}>
                        Add note
                    </Button>
                </>
            )}
        </div>
    );
};

export default CreateNoteComponent;

import { useForm } from "react-hook-form";
import { note } from "../store/notes/types";
import { Button, Form, Row } from "react-bootstrap";
import { Categories } from "../store/notes/notesReducer";
import { createNoteAction } from "../store/notes/actions";
import { useDispatch } from "react-redux";

interface NoteFormProps {
  note?: note;
}
const NoteForm = ({ note }: NoteFormProps) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: note?.name,
      category: note?.category,
      content: note?.content,
    },
  });

  return (
    <div className="d-flex justify-content-center">
      <Form
        className="w-50"
        onSubmit={handleSubmit((data) => {
          dispatch(createNoteAction(data));
        })}
      >
        <Form.Group as={Row} md="4" controlId="validationCustom01">
          <Form.Label>Note name</Form.Label>
          <Form.Control
            {...register("name", { required: "Required" })}
            type="text"
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group as={Row} md="4" controlId="validationCustom02">
          <Form.Label>Note content </Form.Label>
          <Form.Control
            {...register("content", { required: "Required" })}
            as="textarea"
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Row} md="4">
          <Form.Label>Note category</Form.Label>
          <Form.Select
            required
            aria-label="Default select example"
            {...register("category", { required: "Required" })}
          >
            <option>...</option>
            {(Object.keys(Categories) as (keyof typeof Categories)[]).map(
              (key) => (
                <option key={key} value={Categories[key]}>
                  {Categories[key]}
                </option>
              )
            )}
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NoteForm;

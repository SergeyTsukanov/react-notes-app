import { useForm } from "react-hook-form";
import { note } from "../store/notes/types";
import { Button, Form, Row } from "react-bootstrap";
import { Categories } from "../store/notes/notesReducer";
import { noteFormPayload } from "./types";

interface NoteFormProps {
  note?: note;
  onSubmit(data: noteFormPayload): void;
}

const NoteForm = ({ note, onSubmit }: NoteFormProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: note?.id,
      name: note?.name,
      category: note?.category,
      content: note?.content,
    },
  });

  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            {...register("name", { required: "Required" })}
            type="text"
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group as={Row} md="4" controlId="validationCustom02">
          <Form.Label>Content </Form.Label>
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
          <Form.Label>Category</Form.Label>
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

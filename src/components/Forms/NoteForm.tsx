import { useForm } from "react-hook-form";
import { note } from "../../store/notes/types";
import { Categories } from "../../store/notes/notesReducer";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 flex flex-col">
        <label className="mb-2 text-xl font-medium text-gray-900">Name</label>
        <input
          required
          {...register("name", { required: "Required" })}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 p-2.5"
          placeholder="Note name"
        />
      </div>
      <div className="mb-6 flex flex-col">
        <label className="mb-2 text-xl font-medium text-gray-900">
          Content
        </label>
        <textarea
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500  p-2.5 h-32 dark:bg-gray-700"
          {...register("content", { required: "Required" })}
          placeholder="Note content"
        ></textarea>
      </div>
      <div className="mb-6 flex flex-col">
        <label className="mb-2 text-xl font-medium text-gray-900">
          Category
        </label>
        <select
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5"
          aria-label="Default select example"
          {...register("category", { required: "Required" })}
        >
          <option value={""}>...</option>
          {(Object.keys(Categories) as (keyof typeof Categories)[]).map(
            (key) => (
              <option key={key} value={Categories[key]}>
                {Categories[key]}
              </option>
            )
          )}
        </select>
      </div>
      <button type="submit" className="p-2 bg-blue-700 rounded text-white">
        Submit
      </button>
    </form>
  );
};

export default NoteForm;

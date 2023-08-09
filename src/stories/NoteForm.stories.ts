import { Meta, StoryObj } from "@storybook/react";
import NoteForm from "../components/Forms/NoteForm";
import { note } from "../store/notes/types";
import { v4 as uuidv4 } from "uuid";
import { Categories } from "../store/notes/notesReducer";

const meta: Meta<typeof NoteForm> = {
  title: "App/NoteForm",
  component: NoteForm,
  tags: ["autodocs"],
};

export default meta;

export const AddNoteForm: StoryObj<typeof NoteForm> = {
  args: {},
};

const testNote: note = {
  id: uuidv4(),
  name: "John",
  content: "Note content",
  dates: "Note content",
  created: new Date(),
  category: Categories.IDEA,
  isArchive: false,
};

export const EditNoteForm: StoryObj<typeof NoteForm> = {
  args: {
    note: testNote,
  },
};

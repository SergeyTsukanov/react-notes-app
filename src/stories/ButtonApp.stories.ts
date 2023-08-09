import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Utils/Button";

const meta: Meta<typeof Button> = {
  title: "App/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const AddNoteButton: StoryObj<typeof Button> = {
  args: {
    color: "blue",
    children: "Add note",
  },
};
export const SubmitButton: StoryObj<typeof Button> = {
  args: {
    color: "blue",
    children: "Submit",
  },
};

export const CloseFormButton: StoryObj<typeof Button> = {
  args: {
    color: "red",
    children: "Close",
  },
};

export const CloseModalButton: StoryObj<typeof Button> = {
  args: {
    color: "red",
    children: "X",
  },
};

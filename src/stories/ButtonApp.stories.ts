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
    backgroundColor: "blue",
    children: "Add note",
  },
};

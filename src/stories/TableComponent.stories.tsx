import { Meta, Story } from "@storybook/react";
import TableComponent, {
  TableComponentProps,
} from "../components/Table/TableComponent";
import TableHead from "../components/Table/TableHead";
import TableBody from "../components/Table/TableBody";
import { v4 as uuidv4 } from "uuid";
import { Categories } from "../store/notes/notesReducer";
import { parseDates } from "../utils/parseDates";
import { Provider } from "react-redux";
import store from "../store";
import StatsTableBody from "../components/Table/StatsTableBody";

const meta: Meta<typeof TableComponent> = {
  title: "App/Table",
  component: TableComponent,
  tags: ["autodocs"],
};

export default meta;
const Template: Story<TableComponentProps> = (args: TableComponentProps) => (
  <Provider store={store}>
    <TableComponent {...args} />
  </Provider>
);

export const TableWithNotes = Template.bind({});
TableWithNotes.args = {
  children: (
    <>
      <TableHead
        columnsNames={[
          "Name",
          "Created",
          "Category",
          "Content",
          "Dates",
          "Actions",
        ]}
      />
      <TableBody
        data={[
          {
            id: "1",
            name: "Simple Idea",
            created: new Date(),
            category: Categories.TASK,
            content: "Go to the park at 11/07/2023 ",
            isArchive: false,
            dates: parseDates("Go to the park at 11/07/2023"),
          },
          {
            id: "2",
            name: "learn React",
            created: new Date(),
            category: Categories.IDEA,
            content: "build task notes app",
            isArchive: false,
            dates: parseDates("build task notes app"),
          },
          {
            id: "3",
            name: "learn Contenx API",
            created: new Date(),
            category: Categories.RANDTHOUGHT,
            content: "For better understanding react",
            isArchive: false,
            dates: parseDates("For better understanding react"),
          },
          {
            id: uuidv4(),
            name: "Firefox",
            created: new Date(),
            category: Categories.TASK,
            content: "Install new version of Firefox",
            isArchive: false,
            dates: parseDates("Install new version of Firefox"),
          },
        ]}
      />
    </>
  ),
};

export const TableWithStats = Template.bind({});
TableWithStats.args = {
  children: (
    <>
      <TableHead columnsNames={["Category", "active", "archived"]} />
      <StatsTableBody
        data={{
          [Categories.IDEA]: { archived: 0, active: 0 },
          [Categories.TASK]: { archived: 0, active: 0 },
          [Categories.RANDTHOUGHT]: { archived: 0, active: 0 },
        }}
      />
    </>
  ),
};

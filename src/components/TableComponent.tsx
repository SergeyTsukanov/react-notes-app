import { useSelector } from "react-redux";
import * as store from "../store/index.ts";
import { Table } from "react-bootstrap";
import TableHead from "./TableHead.tsx";
import TableRow from "./TableRow.tsx";
const selectNotes = (state: store.AppState) => {
  console.log(state.notesState.notes);
  return state.notesState.notes;
};

interface TableComponentProps {
  columnsNames: string[];
}

const TableComponent = ({ columnsNames }: TableComponentProps) => {
  const notes = useSelector(selectNotes);
  console.log(notes);
  return (
    <Table bordered>
      <TableHead columnsNames={columnsNames} />
      <tbody>
        {notes.map((note) => (
          <TableRow key={note.id} item={note} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;

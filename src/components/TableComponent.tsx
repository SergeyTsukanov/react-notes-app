import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import TableHead from "./TableHead.tsx";
import TableRow from "./TableRow.tsx";
import { selectNotes } from "../store/notes/selectors.tsx";

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

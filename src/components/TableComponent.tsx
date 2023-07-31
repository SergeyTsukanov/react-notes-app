import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import * as store from "../store/index.ts";
import { Table } from "react-bootstrap";
import { note } from "../store/notes/types";
const selectNotes = (state: store.AppState) => {
  console.log(state.notesState.notes);
  return state.notesState.notes;
};

interface TableHeadProps {
  columnsNames: string[];
}

interface TableComponentProps {
  columnsNames: string[];
}

const TableHead = ({ columnsNames }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {columnsNames.map((name) => (
          <th key={name}>{name}</th>
        ))}
      </tr>
    </thead>
  );
};
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

interface TableNoteRowProps {
  item: note;
}

const TableRow = ({ item }: TableNoteRowProps) => {
  console.log(item.created.getDay());
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.created.toString()}</td>
      <td>{item.category}</td>
      <td>{item.content}</td>
      <td>{item.dates}</td>
    </tr>
  );
};

export default TableComponent;

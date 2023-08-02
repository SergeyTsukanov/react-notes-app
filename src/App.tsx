import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ModalUpdateNote from "./components/ModalUpdateNote";
import { CreateNoteComponent } from "./components/CreateNoteComponent";
import {
  selectArchivedNotes,
  selectNonArchivedNotes,
  selectStats,
} from "./store/notes/selectors";
import TableComponent from "./components/Table/TableComponent";
import { useSelector } from "react-redux";
import TableBody from "./components/Table/TableBody";
import TableHead from "./components/Table/TableHead";
import StatsTableBody from "./components/Table/StatsTableBody";

const App: FC = () => {
  const archivedNotes = useSelector(selectArchivedNotes);
  const nonArchivedNotes = useSelector(selectNonArchivedNotes);

  const notesStats = useSelector(selectStats);
  return (
    <>
      <Container>
        {nonArchivedNotes.length > 0 && (
          <TableComponent>
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
            <TableBody data={nonArchivedNotes} />
          </TableComponent>
        )}
        <ModalUpdateNote />
        <CreateNoteComponent />
        {archivedNotes.length > 0 && (
          <TableComponent>
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
            <TableBody data={archivedNotes} />
          </TableComponent>
        )}

        <TableComponent>
          <TableHead columnsNames={["Category", "active", "archived"]} />
          <StatsTableBody data={notesStats} />
        </TableComponent>
      </Container>
    </>
  );
};

export default App;

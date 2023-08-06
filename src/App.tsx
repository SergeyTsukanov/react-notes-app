import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ModalUpdateNote from "./components/Forms/ModalUpdateNote";
import CreateNoteComponent from "./components/Forms/CreateNoteComponent";
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
        <h1 className="text-black font-bold">React notes App</h1>
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
          <>
            <h3 className="mt-4">Archived notes:</h3>
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
          </>
        )}

        <h3 className="mt-4">Stats:</h3>
        <TableComponent>
          <TableHead columnsNames={["Category", "active", "archived"]} />
          <StatsTableBody data={notesStats} />
        </TableComponent>
      </Container>
    </>
  );
};

export default App;

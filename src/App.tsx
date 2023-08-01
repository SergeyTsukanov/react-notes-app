import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableComponent from "./components/TableComponent";
import { Container } from "react-bootstrap";
import NoteForm from "./components/NoteForm";
import ModalUpdateNote from "./components/ModalUpdateNote";

const App: FC = () => {
  return (
    <>
      <Container>
        <div>App</div>

        <TableComponent
          columnsNames={["Name", "Created", "Category", "Content", "Dates"]}
        />
        <ModalUpdateNote />
        <NoteForm />
      </Container>
    </>
  );
};

export default App;

import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableComponent from "./components/TableComponent";
import { Container } from "react-bootstrap";
import ModalUpdateNote from "./components/ModalUpdateNote";
import { CreateNoteComponent } from "./components/CreateNoteComponent";

const App: FC = () => {
  return (
    <>
      <Container>
        <TableComponent
          columnsNames={["Name", "Created", "Category", "Content", "Dates"]}
        />
        <ModalUpdateNote />
        <CreateNoteComponent />
      </Container>
    </>
  );
};

export default App;

import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableComponent from "./components/TableComponent";
import { Container } from "react-bootstrap";

const App: FC = () => {
  return (
    <>
      <Container>
        <div>App</div>

        <TableComponent
          columnsNames={["Name", "Created", "Category", "Content", "Dates"]}
        />
      </Container>
    </>
  );
};

export default App;

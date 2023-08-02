import { Table } from "react-bootstrap";
import { ReactNode } from "react";

interface TableComponentProps {
  children: ReactNode;
}

const TableComponent = ({ children }: TableComponentProps) => {
  return (
    <Table bordered className="mt-4">
      {children}
    </Table>
  );
};

export default TableComponent;

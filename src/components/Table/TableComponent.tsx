import { Table } from "react-bootstrap";
import { ReactNode } from "react";

interface TableComponentProps {
  children: ReactNode;
}

const TableComponent = ({ children }: TableComponentProps) => {
  return <Table bordered>{children}</Table>;
};

export default TableComponent;

import { ReactNode } from "react";

export interface TableComponentProps {
  children: ReactNode;
}

const TableComponent = ({ children }: TableComponentProps) => {
  return (
    <div className="border rounded border-slate-300 shadow mt-4">
      <table className="table-auto w-full">{children}</table>
    </div>
  );
};

export default TableComponent;

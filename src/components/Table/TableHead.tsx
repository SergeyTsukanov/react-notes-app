interface TableHeadProps {
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
export default TableHead;

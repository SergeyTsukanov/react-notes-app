interface TableHeadProps {
  columnsNames: string[];
}
const TableHead = ({ columnsNames }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {columnsNames.map((name) => (
          <th key={name} className="uppercase px-6 py-4 text-xs text-gray-500 bg-gray-50">
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHead;

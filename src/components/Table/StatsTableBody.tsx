import { StatTable } from "../../store/notes/types";

interface StatsTableBodyProps {
  data: StatTable;
}
const StatsTableBody = ({ data }: StatsTableBodyProps) => {
  return (
    <tbody className="divide-y divide-gray-200">
      {Object.entries(data).map((item) => (
        <StatsRow key={item[0]} item={item} />
      ))}
    </tbody>
  );
};

interface StatsRowProps {
  item: [string, { active: number; archived: number }];
}
const StatsRow = ({ item }: StatsRowProps) => {
  return (
    <tr>
      <td className="px-6 py-3 text-gray-800">{item[0]}</td>
      <td className="px-6 py-3 text-gray-800 text-center">{item[1].active}</td>
      <td className="px-6 py-3 text-gray-800 text-center">{item[1].archived}</td>
    </tr>
  );
};

export default StatsTableBody;

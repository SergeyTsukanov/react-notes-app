import { StatTable } from "../../store/notes/types";

interface StatsTableBodyProps {
  data: StatTable;
}
const StatsTableBody = ({ data }: StatsTableBodyProps) => {
  return (
    <tbody>
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
      <td>{item[0]}</td>
      <td>{item[1].active}</td>
      <td>{item[1].archived}</td>
    </tr>
  );
};

export default StatsTableBody;

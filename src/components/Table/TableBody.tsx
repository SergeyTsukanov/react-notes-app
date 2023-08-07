import { note } from "../../store/notes/types";
import { useDispatch } from "react-redux";
import {
  deleteNoteAction,
  toggleArchiveNoteAction,
} from "../../store/notes/actions";
import { openModal } from "../../store/modal/actions";
import { formatDate } from "../../utils/formatDate";

interface TableBodyProps {
  data: note[];
}
const TableBody = ({ data }: TableBodyProps) => {
  return (
    <tbody className="divide-y divide-gray-200">
      {data.map((item) => (
        <TableRow key={item.id} item={item} />
      ))}
    </tbody>
  );
};

interface TableNoteRowProps {
  item: note;
}

const TableRow = ({ item }: TableNoteRowProps) => {
  const dispatch = useDispatch();
  const openEditModal = () => dispatch(openModal(item.id));
  return (
    <tr>
      <td className="px-6 py-3 text-gray-800" >{item.name}</td>
      <td className="px-6 py-3 text-gray-800">{formatDate(item.created)}</td>
      <td className="px-6 py-3 text-gray-800">{item.category}</td>
      <td className="px-6 py-3 text-gray-800">{item.content}</td>
      <td className="px-6 py-3 text-gray-800">{item.dates}</td>
      <td className="px-6 py-3 text-gray-800 flex justify-between">
        <button onClick={() => dispatch(deleteNoteAction(item.id))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="fill-blue-500 hover:fill-blue-800 transition"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </button>
        <button onClick={() => dispatch(toggleArchiveNoteAction(item.id))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="fill-blue-500 hover:fill-blue-800 transition"
            viewBox="0 0 16 16"
          >
            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
          </svg>
        </button>
        <button onClick={openEditModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="fill-blue-500 hover:fill-blue-800 transition"
            viewBox="0 0 16 16"
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default TableBody;

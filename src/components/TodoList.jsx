import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, onHandelDelete, onHandelCheck, check }) => {
  return (
    <li className="todo-item">
      <span className={check ? "checkList" : "notCheckList"}>{data}</span>
      <button
        className="check-btn"
        onClick={() => {
          onHandelCheck(data);
        }}
      >
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandelDelete(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

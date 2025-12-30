import { FaCircleCheck } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const icon = {
  "check": (onEvent) => <FaCircleCheck onClick={onEvent} />,
  "delete": (onEvent) => <FaTrashAlt onPointerUp={onEvent} />,
  "load-check":()=> <FaCircleCheck />,
  "load-delete":()=> <FaTrashAlt />,
  "close": (onEvent) => <IoIosCloseCircleOutline onClick={onEvent} />
};

function ToDoIcon({ type, onEvent }) {
  return <span className={`todo-item-${type}`}>{icon[type](onEvent)}</span>;
}

export { ToDoIcon };

import './ToDoItem.css';
import {CloseDfer} from "../ToDoIcon/CloseDfer"
import {CirculoDfer} from "../ToDoIcon/CirculoDfer"

function ToDoItem(props) {
  return (
    <li className={`todo-item ${props.realizado ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <CirculoDfer onToogle={props.onToogle}/>
        <p>{props.text}</p>
      </div>
      <CloseDfer onDelete={props.onDelete}/>
    </li>
  );
}

export { ToDoItem };
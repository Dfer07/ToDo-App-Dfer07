import './ToDoItem.css';

function ToDoItem(props) {
  return (
    <li className={`todo-item ${props.realizado ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <span 
          className="todo-item-check" 
        >
          ✔️
        </span>
        <p>{props.text}</p>
      </div>
      <span 
        className="todo-item-delete"
      >
        ✖️
      </span>
    </li>
  );
}

export { ToDoItem };
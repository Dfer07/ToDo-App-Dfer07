import './ToDoList.css';

function ToDoList(props) {
  return (
    <ul className="todo-list">
      {props.children}
    </ul>
  );
}

export { ToDoList };
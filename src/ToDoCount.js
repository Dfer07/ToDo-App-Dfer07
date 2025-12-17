import './ToDoCount.css';

function ToDoCount({ completado, total }) {
  return (
    <h1 className="todo-count">
      Has completado {completado} de {total} tareas
    </h1>
  );
}

export { ToDoCount };



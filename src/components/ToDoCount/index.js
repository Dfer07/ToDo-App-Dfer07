import React from "react";
import { TodoContext } from "../TodoContext";
import "./ToDoCount.css";

function ToDoCount() {
  const { toDosCompletados, toDosTotales } = React.useContext(TodoContext);

  if (toDosTotales === 0) {
    return <h1 className="todo-count">Comienza a agregar tareas</h1>;
  } else if (toDosTotales === toDosCompletados) {
    return (
      <h1 className="todo-count">
        <strong>¡FELICITACIONES!</strong> <br /> Has completado todas las tareas
      </h1>
    );
  } else {
    return (
      <h1 className="todo-count">
        Has completado {toDosCompletados} de {toDosTotales} tareas
      </h1>
    );
  }
}

export { ToDoCount };

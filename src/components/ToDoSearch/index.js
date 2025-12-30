import React from "react";
import "./ToDoSearch.css";
import { TodoContext } from "../TodoContext";

function ToDoSearch() {

  const { valorBusqueda, setValorBusqueda } = React.useContext(TodoContext)
  return (
    <input
      className="todo-search"
      placeholder="Buscar tarea..."
      value={valorBusqueda}
      onChange={(event) => {
        setValorBusqueda(event.target.value);
      }}
    />
  );
}

export { ToDoSearch };

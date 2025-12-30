import "./ToDoList.css";
import { ToDoLoad } from "../ToDoLoad";
import React from "react";
import { TodoContext } from "../TodoContext";

function ToDoList({children}) {
  const { loading, error, todosFiltrados } = React.useContext(TodoContext)
  if (loading) {
    return (
      <div className="todo-list-container">
        <ul className="empty">
          Cargando ToDos...
        </ul>
        <ul className="todo-list">
          <ToDoLoad/>
          <ToDoLoad/>
          <ToDoLoad/>
          <ToDoLoad/>
        </ul>
      </div>
    )
  } else if (error) {
    return (
      <div className="todo-list-container">
        <ul className={`empty`}>
          Lo siento, hubo un error.
        </ul>
      </div>
    )
  } else if (todosFiltrados.length === 0) {
    return (
      <div className="todo-list-container">
        <ul className={`empty`}>
          No tienes pendientes por realizar
        </ul>
      </div>
    )
  } else {
    return (
      <div className="todo-list-container">
        <ul className={`todo-list`}>
          {children}
        </ul>
      </div>
    )
  }
}

export { ToDoList };

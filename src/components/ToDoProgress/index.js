import React from 'react';
import './ToDoProgress.css';
import { TodoContext } from '../TodoContext';

function ToDoProgress() {

  const { toDosCompletados, toDosTotales } = React.useContext(TodoContext)

  const porcentaje = toDosTotales === 0 ? 0 : Math.round((toDosCompletados/toDosTotales)*100)

  return (
    <div className="todo-progress-container">
      <div className="todo-progress-bar">
        <div 
          className="todo-progress-fill" style={{width: `${porcentaje}%`}}/>
      </div>
      <p className="todo-progress-text">
        {porcentaje}% completado
      </p>
    </div>
  );
}

export { ToDoProgress };

import React from 'react';
import './ToDoSearch.css';

function ToDoSearch({valorBusqueda, setValorBusqueda}) {
  return (
    <input 
      className="todo-search" 
      placeholder="Buscar tarea..."
      value={valorBusqueda}
      onChange={(event) => {
        setValorBusqueda(event.target.value)
      }}
    />
  );
}

export { ToDoSearch };
import './ToDoProgress.css';

function ToDoProgress({ completado, total }) {
  const porcentaje = total === 0 ? 0 : Math.round((completado/total)*100)

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

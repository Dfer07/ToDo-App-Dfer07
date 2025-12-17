import { ToDoItem } from './ToDoItem';
import { ToDoCount } from './ToDoCount';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { CreateToDoButton } from './CreateToDoButton';
import { ToDoProgress } from './ToDoProgress';
import { ToDoTitle } from './ToDoTitle';
import React from 'react';
import './App.css';

const defaultToDos = [
  { id: 1, text: `comer en kiosco`, realizado: false },
  { id: 2, text: `Hablar con amigos`, realizado: false },
  { id: 3, text: `Hacer ejercicio`, realizado: true }, 
  { id: 4, text: `Hacer la cama`, realizado: true },
  { id: 5, text: `Leer un libro`, realizado: false },
  { id: 6, text: `Tarea 6`, realizado: true },
  { id: 7, text: `Tarea 7`, realizado: false },
  { id: 8, text: `como tatariar`, realizado: false },
];

function App() {
  const [todos] = React.useState(defaultToDos);
  const [valorBusqueda, setValorBusqueda] = React.useState('');

  /* string.includes("") siempre retorna true --> si valorBusqueda esta vacio entonces retorna todos */
  const todosFiltrados = todos.filter(todo => todo.text.toLocaleLowerCase().includes(valorBusqueda.toLowerCase()))

  const toDosCompletados = todos.filter(todo => todo.realizado).length;
  const toDosTotales = todos.length;  

  return (
    <React.Fragment>
      <ToDoTitle />
      <ToDoCount completado={toDosCompletados} total={toDosTotales} />
      <ToDoProgress completado={toDosCompletados} total={toDosTotales}/>
      <ToDoSearch valorBusqueda={valorBusqueda} setValorBusqueda={setValorBusqueda}/> 

      <ToDoList>
        {todosFiltrados.map(todo => (
          <ToDoItem 
            key={todo.id} 
            text={todo.text} 
            realizado={todo.realizado}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;


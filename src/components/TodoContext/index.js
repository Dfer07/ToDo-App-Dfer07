import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();

function ToDoProvider({ children }) {
  const {
    items: todos,
    saveItems: setToDos,
    loading,
    error,
  } = useLocalStorage("ToDos_v1", []);

  const [valorBusqueda, setValorBusqueda] = React.useState("");

  const toogleTodo = (id) => {
    const newstate = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, realizado: !todo.realizado };
      }
      return todo;
    });
    setToDos(newstate);
  };

  const deleteTodo = (id) => {
    const newState = todos.filter((todo) => todo.id !== id);
    setToDos(newState);
  };

  /* string.includes("") siempre retorna true --> si valorBusqueda esta vacio entonces retorna todos */
  const todosFiltrados = todos.filter((todo) => {
    const toDoTextLower = todo.text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const valorBusquedaLower = valorBusqueda
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return toDoTextLower.includes(valorBusquedaLower);
  });

  const [modal, setModal] = React.useState(false)
  const toogleModal = () => setModal(!modal)
  
  const toDosCompletados = todos.filter((todo) => todo.realizado).length;
  const toDosTotales = todos.length;

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        toDosCompletados,
        toDosTotales,
        valorBusqueda,
        setValorBusqueda,
        todosFiltrados,
        toogleTodo,
        deleteTodo,
        toogleModal,
        modal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, ToDoProvider };

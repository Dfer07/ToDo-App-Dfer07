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
    // Validar que todo.text existe antes de procesarlo
    if (!todo.text) return false;

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

  const [modal, setModal] = React.useState(false);
  const toogleModal = () => setModal(!modal);

  const createTodo = (event) => {
    event.preventDefault();
    const newTodoText = event.target.newTodo.value.trim();

    if (newTodoText.length == 0) {
      event.target.newTodo.focus();
      event.target.newTodo.setCustomValidity("No puede contener solo espacios");
      event.target.newTodo.reportValidity();
      return;
    }
    event.target.newTodo.setCustomValidity("");

    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      realizado: false,
    };
    setToDos([...todos, newTodo]);
    toogleModal();
  };

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
        createTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, ToDoProvider };

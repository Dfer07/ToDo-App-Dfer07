import React from "react";
import { ToDoItem } from "../ToDoItem";
import { ToDoCount } from "../ToDoCount";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoProgress } from "../ToDoProgress";
import { ToDoTitle } from "../ToDoTitle";
import { TodoContext } from "../TodoContext";
import "./AppUi.css";
import { ModalBox } from "../ModalBox";
import { ModalCreateToDo } from "../ModalCreateToDo";

function AppUi() {
  const { todosFiltrados, toogleTodo, deleteTodo, modal } =
    React.useContext(TodoContext);

  return (
    <>
      <ToDoTitle />
      <ToDoCount />
      <ToDoProgress />
      <ToDoSearch />

      <ToDoList>
        {todosFiltrados.map((todo) => (
          <ToDoItem
            key={todo.id}
            text={todo.text}
            realizado={todo.realizado}
            onToogle={() => toogleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />

      {modal && (
        <ModalBox>
          <ModalCreateToDo />
        </ModalBox>
      )}
    </>
  );
}

export { AppUi };

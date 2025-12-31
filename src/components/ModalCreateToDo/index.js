import { IconClose } from "../ToDoIcon/IconClose"
import { TodoContext } from "../TodoContext"
import React from "react"
import './ModalCreateToDo.css'

function ModalCreateToDo() {
    const { toogleModal, createTodo } = React.useContext(TodoContext)
    return (
        <div className="modal-overlay">
            <form onSubmit={(event)=>createTodo(event)} className="modal-content">
                <IconClose onEvent={toogleModal}/>
                <div className="modal-header">
                    <h1>Crear nuevo ToDo</h1>
                </div>
                <div className="modal-body">
                    <textarea name="newTodo" placeholder="Escribe tu nuevo ToDo" required/>
                    <button type="submit">Crear</button>
                </div>
            </form>
        </div>
    )
}


export { ModalCreateToDo }
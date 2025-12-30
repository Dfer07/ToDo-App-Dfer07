import { IconClose } from "../ToDoIcon/IconClose"
import { TodoContext } from "../TodoContext"
import React from "react"
import './ModalCreateToDo.css'

function ModalCreateToDo() {
    const { toogleModal } = React.useContext(TodoContext)
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <IconClose onEvent={toogleModal}/>
                <div className="modal-header">
                    <h1>Crear nuevo ToDo</h1>
                </div>
                <div className="modal-body">
                    <p>Aqui va el formulario</p>
                </div>
            </div>
        </div>
    )
}


export { ModalCreateToDo }
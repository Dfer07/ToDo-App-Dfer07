import './ToDoLoad.css';
import {IconLoadCheck} from "../ToDoIcon/IconLoadCheck"
import {IconLoadDelete} from "../ToDoIcon/IconLoadDelete"

function ToDoLoad() {
    return (
        <li className={`todo-item-load`}>
            <div className="todo-item-content">
                <IconLoadCheck/>
            </div>
            <IconLoadDelete/>
        </li>
    )   
}
export {ToDoLoad}
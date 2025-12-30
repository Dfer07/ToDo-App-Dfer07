import { ToDoIcon } from "./";

function IconClose({onEvent}){
    return(
        <ToDoIcon type="close" onEvent={onEvent}/>
    )
}

export {IconClose}
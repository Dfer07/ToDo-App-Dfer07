import { ToDoIcon } from './'

function CloseDfer(props) {
    return (
        <ToDoIcon type="delete" onEvent={props.onDelete} />
    )
}

export { CloseDfer }
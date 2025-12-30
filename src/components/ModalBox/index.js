import React from 'react'
import ReactDOM from 'react-dom'

const idModal = document.getElementById('modal')

function ModalBox({children}){
    return ReactDOM.createPortal(
        <>{children}</>,
        idModal
    )
}

export {ModalBox}
import './CreateToDoButton.css';  
import iconAdd from '../../assets/plus.svg';
import { TodoContext } from "../TodoContext";
import React from "react";

function CreateToDoButton() {
  const {toogleModal} = React.useContext(TodoContext)
  return (
    <button className="create-button" onClick={toogleModal}>
      <img src={iconAdd} alt="Add" className="icon"/>
    </button>
  );
}

export { CreateToDoButton };


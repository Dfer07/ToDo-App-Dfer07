import './CreateToDoButton.css';  
import iconAdd from './assets/plus.svg';

function CreateToDoButton() {
  return (
    <button className="create-button">
      <img src={iconAdd} alt="Add" className="icon" onClick={()=>console.log('Click')}/>
    </button>
  );
}

export { CreateToDoButton };


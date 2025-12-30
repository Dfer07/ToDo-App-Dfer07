import { AppUi } from './AppUi'
import { ToDoProvider } from "../TodoContext";

function App() {
  return (
    <ToDoProvider>
      <AppUi/>
    </ToDoProvider>
  );
}

export default App;


//  const defaultToDos = [
//   { id: 1, text: `comer en kíosco`, realizado: false },
//   { id: 2, text: `Hablar con amigos`, realizado: false },
//   { id: 3, text: `Hacer ejercicio`, realizado: true },
//   { id: 4, text: `Hacer la cama`, realizado: true },
//   { id: 5, text: `Leer un libro`, realizado: false },
//   { id: 6, text: `Tarea 6`, realizado: true },
//   { id: 7, text: `Tarea 7`, realizado: false },
//   { id: 8, text: `como tatariar`, realizado: false },
//   { id: 9, text: `Jugan kien quien ser millonario`, realizado: true },
// ];

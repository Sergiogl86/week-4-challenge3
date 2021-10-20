import "./App.css";
import PanelInfo from "./componentes/PanelInfo/PanelInfo";
import Keyboard from "./componentes/Keyboard/Keyboard";

function App() {
  return (
    <div className="App">
      <Keyboard
        funcionKey={() => console.log("Nada")}
        funcionKeyBig={() => console.log("todo")}
      />
    </div>
  );
}

export default App;

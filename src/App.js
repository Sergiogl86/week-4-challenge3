import "./App.css";
import PanelInfo from "./componentes/PanelInfo/PanelInfo";
import Keyboard from "./componentes/Keyboard/Keyboard";
import Number from "./componentes/Number/Number";
import Buton from "./componentes/Boton/Boton";

function App() {
  return (
    <div class="container">
      <PanelInfo state={true} />
      <main class="phone">
        <Keyboard
          funcionKey={console.log("funcionKey")}
          funcionKeyBig={console.log("funcionKeyBig")}
        />
        <div className="actions">
          <Number numeroTelefono={123654789} />
          <Buton
            nameText={"Call"}
            className={"call"}
            state={true}
            functionButton={console.log("Call")}
          />
          <Buton
            nameText={"Hang"}
            className={"hang"}
            state={true}
            functionButton={console.log("Hang")}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

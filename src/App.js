import "./App.css";
import PanelInfo from "./componentes/PanelInfo/PanelInfo";
import Keyboard from "./componentes/Keyboard/Keyboard";
import Number from "./componentes/Number/Number";
import Buton from "./componentes/Boton/Boton";
import Context from "./componentes/Context/Context";
import { useState } from "react";

function App() {
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [hangState, setHangState] = useState(false);
  const [callState, setCallState] = useState(false);
  return (
    <Context.Provider
      value={{
        numeroTelefono,
        setNumeroTelefono,
        hangState,
        setHangState,
        callState,
        setCallState,
      }}
    >
      <div className="container">
        <PanelInfo state={true} />
        <main className="phone">
          <Keyboard funcionKeyBig={() => console.log("funcionKeyBig")} />
          <div className="actions">
            <Number numeroTelefono={numeroTelefono} />
            <Buton
              nameText={"Call"}
              className={"call"}
              state={callState}
              functionButton={() => console.log("Call")}
            />
            <Buton
              nameText={"Hang"}
              className={"hang"}
              state={hangState}
              functionButton={() => console.log("Hang")}
            />
          </div>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;

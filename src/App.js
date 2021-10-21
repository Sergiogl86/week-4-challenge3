import "./App.css";
import PanelInfo from "./componentes/PanelInfo/PanelInfo";
import Keyboard from "./componentes/Keyboard/Keyboard";
import Number from "./componentes/Number/Number";
import Buton from "./componentes/Boton/Boton";
import Context from "./componentes/Context/Context";
import { useRef, useState } from "react";

function App() {
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [callState, setCallState] = useState(false);
  const [hangState, setHangState] = useState(false);
  const [panelInfo, setPanelInfo] = useState(false);
  const timerSergio = useRef(null);

  const funcionLlamar = () => {
    setPanelInfo(true);
    setCallState(false);
    setHangState(true);
    timerSergio.current = setTimeout(() => {
      funcionColgar();
    }, 5000);
  };

  const funcionColgar = () => {
    setPanelInfo(false);
    setCallState(false);
    setHangState(false);
    clearTimeout(timerSergio.current);
    setNumeroTelefono("");
  };

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
        <PanelInfo state={panelInfo} />
        <main className="phone">
          <Keyboard funcionKeyBig={() => console.log("funcionKeyBig")} />
          <div className="actions">
            <Number numeroTelefono={numeroTelefono} />
            {hangState ? (
              <></>
            ) : (
              <Buton
                nameText={"Call"}
                className={"call"}
                state={callState}
                functionButton={callState ? funcionLlamar : () => {}}
              />
            )}

            {hangState ? (
              <Buton
                nameText={"Hang"}
                className={"hang"}
                state={hangState}
                functionButton={funcionColgar}
              />
            ) : (
              <></>
            )}
          </div>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;

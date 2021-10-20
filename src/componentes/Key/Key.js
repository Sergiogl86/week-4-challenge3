import { useContext } from "react";
import Context from "../Context/Context";

function Key({ numero }) {
  const {
    numeroTelefono,
    setNumeroTelefono,
    hangState,
    setHangState,
    callState,
    setCallState,
  } = useContext(Context);
  debugger;
  const numeroTecla = numero;
  const introducirNumero = () => {
    if (numeroTelefono.length < 9) {
      setNumeroTelefono(numeroTelefono + numeroTecla);
    }
    if (numeroTelefono.length === 8) {
      setCallState(true);
    }
  };

  return (
    <li>
      <button onClick={() => introducirNumero()} className="key">
        {numero}
      </button>
    </li>
  );
}

export default Key;

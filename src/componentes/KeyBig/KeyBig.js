import { useContext } from "react";
import Context from "../Context/Context";

function KeyBig() {
  const textKeyBig = "delete";

  const { numeroTelefono, setNumeroTelefono, setCallState } =
    useContext(Context);

  const borrarUltimoNumero = () => {
    const arrayNumeroTelefono = numeroTelefono.split("");
    arrayNumeroTelefono.pop();
    if (arrayNumeroTelefono.length === 8) {
      setCallState(false);
    }
    setNumeroTelefono(arrayNumeroTelefono.join(""));
  };

  return (
    <li>
      <button onClick={borrarUltimoNumero} className="key big">
        {textKeyBig}
      </button>
    </li>
  );
}

export default KeyBig;

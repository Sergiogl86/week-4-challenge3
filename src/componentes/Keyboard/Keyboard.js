import Key from "../Key/Key";
import KeyBig from "../KeyBig/KeyBig";

function Keyboard({ funcionKey, funcionKeyBig }) {
  const tecladoNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {tecladoNumerico.map((numero) => (
          <Key key={numero} numero={numero} funcion={funcionKey} />
        ))}
        <KeyBig funcionKeyBig={funcionKeyBig} />
      </ol>
    </div>
  );
}

export default Keyboard;

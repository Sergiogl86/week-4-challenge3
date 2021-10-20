function Key({ numero, funcion }) {
  return (
    <li>
      <button onClick={funcion} className="key">
        {numero}
      </button>
    </li>
  );
}

export default Key;

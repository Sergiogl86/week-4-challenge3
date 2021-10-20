function KeyBig({ funcionKeyBig }) {
  const textKeyBig = "delete";

  return (
    <li>
      <button onClick={funcionKeyBig} className="key big">
        {textKeyBig}
      </button>
    </li>
  );
}

export default KeyBig;

function Buton({ nameText, className, state, functionButton }) {
  const classActive = `${className} active`;

  if (state === true) {
    return (
      <a onClick={functionButton} href="Boton" className={classActive}>
        {nameText}
      </a>
    );
  } else {
    return (
      <a onClick={functionButton} href="Boton" className={className}>
        {nameText}
      </a>
    );
  }
}

export default Buton;

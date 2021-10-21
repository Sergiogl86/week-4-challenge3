function Buton({ nameText, className, state, functionButton }) {
  const classActive = `${className} active`;

  const eventfunctionButton = (event) => {
    event.preventDefault();
    functionButton(nameText);
  };

  if (state === true) {
    return (
      <a
        role="button"
        onClick={eventfunctionButton}
        href="Boton"
        className={classActive}
      >
        {nameText}
      </a>
    );
  } else {
    return (
      <a onClick={eventfunctionButton} href="Boton" className={className}>
        {nameText}
      </a>
    );
  }
}

export default Buton;

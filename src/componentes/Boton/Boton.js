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
        disabled={!state}
      >
        {nameText}
      </a>
    );
  } else {
    return (
      <a
        onClick={eventfunctionButton}
        href="Boton"
        className={className}
        disabled={!state}
      >
        {nameText}
      </a>
    );
  }
}

export default Buton;

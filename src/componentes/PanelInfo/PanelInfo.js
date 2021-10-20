function PanelInfo({ state }) {
  const textoLlamando = "Calling...";

  if (state === true) {
    return <span className="message">{textoLlamando}</span>;
  } else {
    return <></>;
  }
}

export default PanelInfo;


function MensajeEstado({ texto }) {
  return (
    <p className="mensaje-estado" role="status">
      {texto}
    </p>
  );
}

export default MensajeEstado;


import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <main>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  );
}

export default NoEncontrado;

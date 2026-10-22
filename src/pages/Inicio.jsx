import { Link } from "react-router-dom";

function Inicio() {
  return (
    <main>
      <h1>Explorador Dragon Ball</h1>
      <p>
        Explora personajes, descubre sus características
        y guarda tus favoritos.
      </p>
      <Link to="/lista">Ver personajes</Link>
    </main>
  );
}

export default Inicio;

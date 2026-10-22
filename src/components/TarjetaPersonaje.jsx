
import { Link } from "react-router-dom";

function TarjetaPersonaje({ personaje }) {
  return (
    <article className="tarjeta-personaje">
      <img
        src={personaje.image}
        alt={`Imagen de ${personaje.name}`}
        loading="lazy"
      />

      <div className="contenido-tarjeta">
        <h2>{personaje.name}</h2>

        <p>
          <strong>Raza:</strong> {personaje.race || "Desconocida"}
        </p>

        <p>
          <strong>Género:</strong> {personaje.gender || "No especificado"}
        </p>

        <Link
          to={`/detalle/${personaje.id}`}
          className="boton-detalle"
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
}

export default TarjetaPersonaje;

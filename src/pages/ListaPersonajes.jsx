import { useEffect, useState } from "react";
import { obtenerPersonajes } from "../services/api";
import TarjetaPersonaje from "../components/TarjetaPersonaje";
import Buscador from "../components/Buscador";
import MensajeEstado from "../components/MensajeEstado.jsx";

function ListaPersonajes({ favoritos = [], toggleFavorito }) {
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [raza, setRaza] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelado = false;

    const cargarPersonajes = async () => {
      setCargando(true);
      setError("");

      try {
        const resultado = await obtenerPersonajes(pagina, 12);

        if (!cancelado) {
          setPersonajes(resultado.personajes);
          setTotalPaginas(resultado.totalPaginas);
        }
      } catch (error) {
        if (!cancelado) {
          setError(error.message);
        }
      } finally {
        if (!cancelado) {
          setCargando(false);
        }
      }
    };

    cargarPersonajes();

    return () => {
      cancelado = true;
    };
  }, [pagina]);

  const personajesFiltrados = personajes.filter((personaje) => {
    const coincideNombre = personaje.name
      ?.toLowerCase()
      .includes(busqueda.trim().toLowerCase());

    const coincideRaza =
      !raza || personaje.race === raza;

    return coincideNombre && coincideRaza;
  });

  const cambiarPagina = (nuevaPagina) => {
    setPagina(nuevaPagina);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <h1>Personajes de Dragon Ball</h1>
      <p>Explora los personajes y descubre sus características.</p>

      <Buscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        raza={raza}
        setRaza={setRaza}
      />

      {cargando && <MensajeEstado texto="Cargando personajes..." />}

      {!cargando && error && (
        <section className="mensaje-error">
          <p>{error}</p>
          <button onClick={() => cambiarPagina(pagina)}>
            Volver a intentar
          </button>
        </section>
      )}

      {!cargando && !error && personajesFiltrados.length === 0 && (
        <MensajeEstado texto="No se encontraron personajes con esos filtros." />
      )}

      {!cargando && !error && personajesFiltrados.length > 0 && (
        <section className="rejilla-personajes">
          {personajesFiltrados.map((personaje) => {
            const esFavorito = favoritos.some((fav) => fav.id === personaje.id);

            return (
              <div key={personaje.id} className="tarjeta-wrapper">
                <TarjetaPersonaje personaje={personaje} />
                
                <button
                  onClick={() => toggleFavorito(personaje)}
                  className={`btn-favorito-accion ${esFavorito ? 'es-favorito' : 'no-favorito'}`}
                >
                  {esFavorito ? '❤️ Quitar de Favoritos' : '🤍 Agregar a Favoritos'}
                </button>
              </div>
            );
          })}
        </section>
      )}

      {!cargando && !error && (
        <nav className="paginacion" aria-label="Paginación de personajes">
          <button
            onClick={() => cambiarPagina(pagina - 1)}
            disabled={pagina <= 1}
          >
            Anterior
          </button>

          <span>
            Página {pagina} de {totalPaginas}
          </span>

          <button
            onClick={() => cambiarPagina(pagina + 1)}
            disabled={pagina >= totalPaginas}
          >
            Siguiente
          </button>
        </nav>
      )}
    </main>
  );
}

export default ListaPersonajes;
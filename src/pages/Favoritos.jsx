import { Link } from 'react-router-dom';

export default function Favoritos({ favoritos, toggleFavorito }) {
  return (
    <main className="favoritos-container">
      <h2>Tus Personajes Favoritos ({favoritos.length})</h2>

      {favoritos.length === 0 ? (
        <p className="vacio-texto">
          Aún no tienes personajes agregados a favoritos. ¡Explora el listado para agregar algunos!
        </p>
      ) : (
        <section className="rejilla-personajes">
          {favoritos.map((personaje) => (
            <div key={personaje.id} className="tarjeta-personaje">
              <img 
                src={personaje.image} 
                alt={personaje.name} 
                className="imagen-favorito" 
              />
              <div className="contenido-tarjeta">
                <h3>{personaje.name}</h3>
                <p><strong>Raza:</strong> {personaje.race}</p>
                
                <div className="tarjeta-acciones">
                  <Link to={`/detalle/${personaje.id}`} className="boton-detalle">
                    Ver Detalle
                  </Link>
                  
                  <button 
                    onClick={() => toggleFavorito(personaje)} 
                    className="btn-favorito-accion es-favorito"
                  >
                    ❤️ Quitar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DetallePersonaje({ favoritos, toggleFavorito }) {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el detalle');
        return res.json();
      })
      .then((data) => {
        setPersonaje(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando detalle...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!personaje) return <p>No se encontró el personaje.</p>;

  const esFavorito = favoritos.some((fav) => fav.id === personaje.id);

  return (
    <div className="detalle-container">
      <h2>{personaje.name}</h2>
      <img src={personaje.image} alt={personaje.name} />
      <p><strong>Raza:</strong> {personaje.race}</p>
      <p><strong>Género:</strong> {personaje.gender}</p>
      <p><strong>Ki:</strong> {personaje.ki}</p>
      <p><strong>Ki Máximo:</strong> {personaje.maxKi}</p>
      <p><strong>Afiliación:</strong> {personaje.affiliation}</p>
      <p><strong>Descripción:</strong> {personaje.description}</p>
      
      <div className="detalle-acciones">
        <Link to="/lista" className="boton-detalle">Volver al listado</Link>
        
        <button 
          onClick={() => toggleFavorito(personaje)}
          className={`btn-favorito-accion ${esFavorito ? 'es-favorito' : 'no-favorito'}`}
        >
          {esFavorito ? '❤️ Quitar de Favoritos' : '🤍 Agregar a Favoritos'}
        </button>
      </div>
    </div>
  );
}
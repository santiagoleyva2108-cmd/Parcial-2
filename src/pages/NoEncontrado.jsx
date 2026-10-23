
import { Link } from 'react-router-dom';
 // O tus estilos generales

export default function NoEncontrado() {
  return (
    <div className="not-found-container" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la ruta que intentas visitar no existe o fue movida.</p>
      <Link to="/" className="btn-volver" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#ff7a00', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
        Volver al inicio
      </Link>
    </div>
  );
}

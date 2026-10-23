import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <main className="inicio-container" style={{ textAlign: 'center', padding: '50px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#d97706' }}>
        ¡Bienvenido a Dragon Ball Explorer! 🐉
      </h1>
      
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px', color: '#333' }}>
        Explora el vasto universo de Dragon Ball, consulta las características detalladas de cada guerrero, guarda tus favoritos y gestiona usuarios de forma local.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        <Link 
          to="/lista" 
          style={{
            background: '#ff7700',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
          }}
        >
          Explorar Personajes
        </Link>

        <Link 
          to="/registro" 
          style={{
            background: '#333',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            border: '1px solid #555'
          }}
        >
          Gestionar Registro
        </Link>
      </div>
    </main>
  );
}
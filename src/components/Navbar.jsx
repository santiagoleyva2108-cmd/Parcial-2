
import { NavLink } from "react-router-dom";

function Navbar() {
  // Por ahora, los contadores comienzan en cero.
  // Más adelante los conectaremos con favoritos y usuarios.
  const cantidadFavoritos = 0;
  const cantidadUsuarios = 0;

  const obtenerClase = ({ isActive }) =>
    isActive ? "nav-enlace activo" : "nav-enlace";

  return (
    <header className="encabezado">
      <NavLink to="/" className="logo">
        Dragon Ball Explorer
      </NavLink>

      <nav className="navegacion">
        <NavLink to="/" end className={obtenerClase}>
          Inicio
        </NavLink>

        <NavLink to="/lista" className={obtenerClase}>
          Lista
        </NavLink>

        <NavLink to="/favoritos" className={obtenerClase}>
          Favoritos ({cantidadFavoritos})
        </NavLink>

        <NavLink to="/registro" className={obtenerClase}>
          Registro ({cantidadUsuarios})
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
